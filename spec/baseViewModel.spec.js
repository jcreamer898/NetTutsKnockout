define( [ "underscore", "models/baseViewModel", "ko" ], function( _, BaseViewModel, ko ) {
	var TestModel = function( options ) {
		this.id = 0;
		this.name = "";
		this.age = null;
		this.colors = [];

		BaseViewModel.call( this, options );
	};

	TestModel.prototype.initialize = function() {
		this.name( "foo" );
	};

	_.extend(TestModel.prototype, BaseViewModel.prototype );

	describe( "testing the base view model", function() {
		it ( "should add ko.observable to each property", function() {
			var model = new TestModel();

			expect( typeof model.id === "function" ).to.be.ok();
			expect( model.id() ).to.be( 0 );
			expect( typeof model.name === "function" ).to.be.ok();
			expect( _.isArray( model.colors() ) ).to.be.ok();
			expect( model.colors().length ).to.be( 0 );
		});

		it( "should add ko.observable to each proprerty passed in", function() {
			var model = new TestModel({
				id: 1,
				name: "joe",
				age: 24,
				colors: [ "blue", "green", "red" ]
			});

			expect( typeof model.id === "function" ).to.be.ok();
			expect( model.id() ).to.be( 1 );
			expect( typeof model.name === "function" ).to.be.ok();
			expect( model.age() ).to.be( 24 );
			expect( _.isArray( model.colors() ) ).to.be.ok();
			expect( model.colors().length ).to.be( 3 );
		});

		it ( "should call the initialize method", function() {
			var model = new TestModel();

			expect( model.name() ).to.be( "foo" );
		});
	});
});