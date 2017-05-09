var ch1 = 1,
	ch2 = 1,
	ch3 = 3,
	ch4 = 1;

if ( ch1 != ch2 && ch1 != ch3 && ch1 != ch4 ) {
	console.log ('Отличное число находится на первой позиции!');
} 
else if ( ch2 != ch1 && ch2 != ch3 && ch2 != ch4 ) {
	console.log ('Отличное число находится на второй позиции!');
}
else if ( ch3 != ch1 && ch3 != ch2 && ch3 != ch4 ) {
	console.log ('Отличное число находится на третьей позиции!');
} 
else if ( ch4 != ch1 && ch4 != ch2 && ch4 != ch3 ) {
	console.log ('Отличное число находится на четвертой позиции!');
} 
else {
	console.log ('Что-то пошло не так((');
}