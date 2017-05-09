var a = 10,
	b = 12;

if ( a >= 0 && b >= 0) {
	result = a - b;
}
else if ( a < 0 && b < 0) {
	result = a * b;
}
else {
	result = a + b;
}

console.log( result );