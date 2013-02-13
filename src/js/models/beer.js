define( [ "underscore", "ko" ], function( _, ko ) {
	var Beer = function( options ) {
		this.id = 0;
		this.name = null;
		this.description = null;
		this.abv = null;
		this.created_at = null;
		this.updated_at = null;
	};

	return Beer;
});


var beer = {
	id: 55,
	name: "Old Numbskull",
	description: "A West Coast style barleywine. Aroma starts with toasty, caramel notes and a pleasant hop character. Color is deep amber, with tan head and impressive 'Brussels Lace' that clings to the sides of the glass.",
	abv: 11,
	created_at: "2011-05-29T03:25:05Z",
	updated_at: "2011-05-29T03:25:05Z",
	brewery: {
		id: 7,
		name: "AleSmith"
	}
};