var a = 1,
	b = 4,
	c = 5,
	x1_input,
	x2_input;

function squareRoots( a, b, c, x1_input, x2_input ) {
	var diskr = b*b - 4*a*c;
	if ( diskr > 0 ) {
		x1_input = ( -1 * b + Math.sqrt( diskr ) ) / ( 2 * a );
		x2_input = ( -1 * b - Math.sqrt( diskr ) ) / ( 2 * a );
		console.log ( x1_input, x2_input );
	} else if ( diskr === 0 ) {
		x1_input = ( -1 * b ) / ( 2 * a );
		x2_input = x1_input;
		console.log ( x1_input, x2_input );
	} else {
		x1_input = ( -1 * b ) / ( 2 * a );
		x2_input = ( -1 * b ) / ( 2 * a );
		var mnim = Math.sqrt( -1 * diskr ) / ( 2 * a );
		x1_input = x1_input + '+' + mnim + 'i';
		x2_input = x2_input + '-' + mnim + 'i'; 
		console.log ( x1_input, x2_input );
	}
}

