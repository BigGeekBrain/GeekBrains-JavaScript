var arg1 = 10,
	arg2 = 20,
	oper = '*';

var result = mathOperation( arg1, arg2, oper );
console.log ( result );

function mathOperation( arg1, arg2, operation) {
	switch ( operation ) {
		case '+':
			return ( arg1 + arg2 );
		case '-':
			return ( arg1 - arg2 );
		case '*':
			return ( arg1 * arg2 );
		case '/':
			return ( arg1 / arg2 );
		}
}