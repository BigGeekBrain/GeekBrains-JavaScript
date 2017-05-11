var i = 0,
n = 10,
value;

do {
	if ( i === 0 ) {
  	value = i + ' - это ноль';
	} else {
		if ( i%2 === 0 ) {
    	value = i + ' - четное число'
		} else {
    	value = i + " - нечетное число";
		}
	}
  console.log( value );
} while ( i++ < n )