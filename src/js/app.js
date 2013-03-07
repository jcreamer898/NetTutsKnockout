define( [ "underscore", "jquery", "postal", "shared/resources" ], function( _, $, postal, Resources ) {
    // postal.addWireTap(function( d, e ) {
    //  console.log( JSON.stringify( e ) );
    // });

    var App = function( options ) {
        options = options || {};

        this.resources = options.resources || new Resources();
        this.channels = {};
        this.debug = true;

        this.initialize();
    };

    _.extend(App.prototype, {
        initialize: function() {
            this.setupChannels();
            
            this.ready();
        },
        ready: function( data ) {
            this.channel.publish( "ready" );
        },
        setupChannels: function() {
            this.channel = postal.channel( "app" );
            this.channels.data = postal.channel( "data" );
        }
    });

    return new App();
});