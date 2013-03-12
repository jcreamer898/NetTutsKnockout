if ( !window.mocha ) {
    require( [ "app", "postal", "ko", "viewModels/beerViewModel" ], function( app, postal, ko, BeerViewModel ) {
        window.app = app;
        window.postal = postal;

        ko.applyBindings( new BeerViewModel() );
    });
}