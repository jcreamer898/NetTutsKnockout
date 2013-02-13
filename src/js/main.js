require.config({
	paths: {
		ko: "vendor/knockout-min",
		postal: "vendor/postal",
		underscore: "vendor/underscore-min"
	},
	shim: {
		ko: {
			exports: "ko"
		},
        underscore: {
            exports: "_"
        }
	},
	baseUrl: "/js"
});

if ( !window.mocha ) {
	require( [ "app", "postal" ], function( app, postal ) {
		window.app = app;
		window.postal = postal;
	});
}