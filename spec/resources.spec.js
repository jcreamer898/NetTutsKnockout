define( [ "shared/resources", "postal" ], function( Resources, postal ) {
	describe( "resources.js", function() {
		beforeEach(function() {
			this.channel = postal.channel( "data" );
			this.resources = new Resources();
		});

		it( "should make requests from posted messages", function() {
			sinon.stub( jQuery, "ajax" );

			this.channel.publish( "model.fetch", {
				url: "some/url"
			});

			expect( jQuery.ajax.calledOnce ).to.be.ok();
			expect( jQuery.ajax.calledWithMatch({
				url: "some/url"
			})).to.be.ok();

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
		});

		it( "should post error messages", function() {
			var called = false,
				sub = this.channel.subscribe( "someModel.error", function() {
					called = true;
				});

			expect( called ).to.not.be.ok();
			this.resources.error( "someModel.error" );
			expect( called ).to.be.ok();
		});
	});
});