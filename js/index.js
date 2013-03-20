if ( !window.mocha ) {
    require( [ "app", "postal", "ko", "viewModels/indexViewModel" ], function( app, postal, ko, IndexViewModel ) {
        window.app = app;
        window.postal = postal;

        ko.applyBindings( new IndexViewModel() );
    });
}