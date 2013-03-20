define( [ "underscore", "viewModels/indexViewModel", "models/beer", "postal" ], function ( _, IndexViewModel, Beer, postal ) {
    // postal.addWireTap(function( d, e ) {
    //     console.log( JSON.stringify( e ) );
    // });
    describe( "IndexViewModel tests", function() {
        beforeEach(function() {
            this.viewModel = new IndexViewModel();

            this.viewModel.beers.push(new Beer({
                name: "budweiser",
                id: 1
            }));
            this.viewModel.beers.push(new Beer({
                name: "amberbock",
                id: 2
            }));
        });

        afterEach(function() {
            postal.utils.reset();
        });

        it( "should filter a list of beers", function() {
            expect( _.isFunction( this.viewModel.beerListFiltered ) ).to.be.ok();

            this.viewModel.search( "bud" );

            expect( this.viewModel.filterBeers().length ).to.be( 1 );

            this.viewModel.search( "" );

            expect( this.viewModel.filterBeers().length ).to.be( 2 );
        });

        it( "should parse incoming beer data", function() {
            this.viewModel.parse([{
                name: "Abita Amber"
            }]);

            expect( this.viewModel.beers().length ).to.be( 3 );
        });

        it( "should add new beers to favorites", function() {
            expect( this.viewModel.favorites().length ).to.be( 0 );

            this.viewModel.addToFavorites( new Beer({
                name: "abita amber",
                id: 3
            }));

            expect( this.viewModel.favorites().length ).to.be( 1 );
        });
    });
});