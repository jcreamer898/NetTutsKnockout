define( [ "underscore", "jquery", "postal", "shared/resources" ], function( _, $, postal, Resources ) {
	postal.addWireTap(function( d, e ) {
		console.log( JSON.stringify( e ) );
	});

	var App = function( options ) {
		options = options || {};

		this.resources = options.resources || new Resources();
		this.channels = {};

		this.initialize();
	};

	_.extend(App.prototype, {
		initialize: function() {
			this.setupChannels();
			this.setupSubscriptions();
			
			this.channels.data.publish( "beers.fetch", {
				url: "http://api.openbeerdatabase.com/v1/beers.json",
				successReplyTo: "beers.fetched"
			});
		},
		ready: function( data ) {
			this.channel.publish( "ready" );
		},
		setupChannels: function() {
			this.channel = postal.channel( "app" );
			this.channels.data = postal.channel( "data" );
		},
		setupSubscriptions: function() {
			this.channels.data.subsribe( "beers.fetched", this.ready ).withContext( this );
		}
	});

	return new App();
});