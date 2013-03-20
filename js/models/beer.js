define( [ "underscore", "ko", "models/baseViewModel" ], function( _, ko, BaseViewModel ) {
	var Beer = function( options ) {
		this.id = 0;
		this.name = null;
		this.description = null;
		this.abv = null;
		this.created_at = null;
		this.updated_at = null;

		BaseViewModel.apply( this, arguments );
	};

	_.extend( Beer.prototype, BaseViewModel.prototype );

	return Beer;
});