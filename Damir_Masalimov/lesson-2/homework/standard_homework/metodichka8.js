var val = 2,
		pow = 6;

function power( val, pow ) {
	if ( pow > 1 ) {
		result = val * power ( val, pow-1 );
	} else {
		result = val;
	}
	return result;
}

res = power( val, pow );

console.log ( res );