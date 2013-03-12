define( [
    "ko",
    "underscore",
    "postal",
    "models/beer",
    "models/baseViewModel",
    "shared/bus" ], function ( ko, _, postal, Beer, BaseViewModel, bus ) {

    var BeerViewModel = function() {
        this.beer = new Beer({
            id: 1,
            name: "Budweiser",
            abv: "5.0"
        });

        this.id = this.beer.id;
        this.name = this.beer.name;
        this.abv = this.beer.abv;
    };

    _.extend(BeerViewModel.prototype, BaseViewModel.prototype, {
        initialize: function() {

        }
    });

    return BeerViewModel;
});