var chislo = 7;

if ( chislo % 2 ) {
	if ( chislo > 99 ) {
		console.log ('Число', chislo, ' - трехзначное нечетное');
	} 
	else if ( chislo > 9 ) {
		console.log ('Число', chislo, ' - двузначное нечетное');
	} 
	else {
		console.log ('Число', chislo, ' - однозначное нечетное');
	}
} 
else {
	if ( chislo > 99 ) {
		console.log ('Число', chislo, ' - трехзначное четное');
	} 
	else if ( chislo > 9 ) {
		console.log ('Число', chislo, ' - двузначное четное');
	}
	else {
		console.log ('Число', chislo, ' - однозначное четное');
	}
}