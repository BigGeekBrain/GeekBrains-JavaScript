var arg1 = 10;
var arg2 = 15;
var oper = '/';

function add( a, b ) {
	return a+b;
}

function sub( a, b ) {
	return a-b;
}

function div( a, b ) {
	return a/b;
}

function mul( a, b ) {
	return a*b;
}

if ( oper === '+' ) {
	console.log( add( arg1, arg2 ) );
} else if ( oper === '-' ) {
	console.log( sub( arg1, arg2 ) );
} else if ( oper === '/' ) {
	console.log( div( arg1, arg2 ) );
} else if ( oper === '*' ) {
	console.log( mul( arg1, arg2 ) );
}