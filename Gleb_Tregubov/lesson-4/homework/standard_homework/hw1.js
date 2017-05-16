
//----------РАБОЧИЙ ВАРИАНТ----------//
var i = 2;
console.log( 'Простые числа');
prime:
 while(i < 100) {
     i++;
    for (var j = 2; j < i; j++) {
      if (i % j == 0) continue prime;
    }

    console.log( i );
  }
