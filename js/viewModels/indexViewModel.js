define( [
    "ko",
    "underscore",
    "postal",
    "models/beer",
    "models/baseViewModel",
    "shared/bus" ], function ( ko, _, postal, Beer, BaseViewModel, bus ) {

    var IndexViewModel = function() {
        this.beers = [];
        this.favorites = [];
        this.search = "";

        BaseViewModel.apply( this, arguments );

        _.bindAll( this, "addToFavorites", "removeFromFavorites" );
    };

    _.extend(IndexViewModel.prototype, BaseViewModel.prototype, {
        initialize: function() {
            this.setupSubscriptions();

            this.beerListFiltered = ko.computed( this.filterBeers, this );

            bus.data.publish({
                topic: "beers.fetch",
                resourceId: "beerList",
                successReplyTo: "beers.fetched"
            });
        },

        filterBeers: function() {
            var filter = this.search().toLowerCase();

            if ( !filter ) {
                return this.beers();
            }
            else {
                return ko.utils.arrayFilter( this.beers(), function( item ) {
                    return ~item.name().toLowerCase().indexOf( filter );
                });
            }
        },

        parse: function( beers ) {
            _.each( beers, function( beer ) {
                this.beers.push( new Beer( beer ) );
            }, this );
        },

        setupSubscriptions: function() {
            var self = this;

            bus.data.subscribe( "beers.fetched", function( data ) {
                self.parse.call( self, _.sortBy( data.data, "name" ) );
            });
        },

        addToFavorites: function( beer ) {
            this.favorites.push( beer );
        },

        removeFromFavorites: function( beer ) {
            this.favorites.remove( beer );
        },

        doSearch: function() {
            return false;
        }
    });

    return IndexViewModel;
});