define( [ "shared/resources", "postal", "amplify", "data/amplifyResources"], function( Resources, postal, ampflify ) {
	describe( "resources.js", function() {
		beforeEach(function() {
			this.channel = postal.channel( "data" );
			this.resources = new Resources();
		});

		it( "should make requests from posted messages", function( ) {
			var called;

			var sub = this.channel.subscribe( "beers.fetched", function() {
				called = true;
				expect( called ).to.be.ok();
			});

			this.channel.publish({
                topic: "beers.fetch",
                resourceId: "beerList",
                successReplyTo: "beers.fetched"
            });

            expect( called ).to.not.be.ok();

			postal.utils.reset();
		});

		it( "should post success messages", function() {
			var called = false,
				sub = this.channel.subscribe( "someModel.fetched", function() {
					called = true;
				});

			expect( called ).to.not.be.ok();
			this.resources.success( "someModel.fetched" );
			expect( called ).to.be.ok();

			postal.utils.reset();
		});

		it( "should post error messages", function() {
			var called = false,
				sub = this.channel.subscribe( "someModel.error", function() {
					called = true;
				});

			expect( called ).to.not.be.ok();
			this.resources.error( "someModel.error" );
			expect( called ).to.be.ok();

			postal.utils.reset();
		});
	});
});