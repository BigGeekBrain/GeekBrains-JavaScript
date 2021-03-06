// Домашнее задание //

/*
1. Почему код даёт именно такие результаты?
*/

c = ++a;
alert( c ); // =2 c равно 1 увеличенное на единицу
d = b++;
alert( d ); // =1 оператор увеличения чтоит после переменной
c = ( 2 + ++a );
alert( c ); // =5 а ранее уже было равно 2м, а здесь оно увеличивается еще на 1 и добавляется еще 2
d = ( 2 + b++ );
alert( d ); // =4 всё в скобках b увеличивается на 1 и прибавляется 2
alert( a ); // =3 наследуется текущее значение из памяти
alert( b ); // =3 наследуется текущее значение из памяти



/*
2. Чему будет равен x в примере ниже? 
*/

var a = 2;
var x = 1 + ( a *= 2 );

// х равен 5 так как полное выражение 1 + ( 2 * 2 )



/* 
3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
*/

var
  a = 5,
b = 7;

// Затем написать скрипт, который работает по следующему принципу:

// если a и b положительные, вывести их разность;
if ( a >= 0 && b >= 0 ) { // ноль можно считать положительным числом.
  console.log( a - b );
}

// если а и b отрицательные, вывести их произведение;
else if ( a < 0 && b < 0 ) { // ноль можно считать положительным числом.
  console.log( a * b );
}

// если а и b разных знаков, вывести их сумму;
else {
  console.log( a + b );
}



/*
4. Присвоить переменной а значение в промежутке[0. .15].
*/

var a;

function getRandom( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}

a = getRandom( 0, 15 );

// С помощью оператора switch организовать вывод чисел от a до 15.
switch ( a ) {
  case 1:
    console.log( a++ );
  case 2:
    console.log( a++ );
  case 3:
    console.log( a++ );
  case 4:
    console.log( a++ );
  case 5:
    console.log( a++ );
  case 6:
    console.log( a++ );
  case 7:
    console.log( a++ );
  case 8:
    console.log( a++ );
  case 9:
    console.log( a++ );
  case 10:
    console.log( a++ );
  case 11:
    console.log( a++ );
  case 12:
    console.log( a++ );
  case 13:
    console.log( a++ );
  case 14:
    console.log( a++ );
  case 15:
    console.log( a++ );
    break;
  default:
    break;
}




/*
5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
Обязательно использовать оператор return.
*/
function addition( x, y ) {
  return x + y;
}

function division( x, y ) {
  return x / y;
}

function mult( x, y ) {
  return x * y;
}

function subs( x, y ) {
  return x - y;
}



/*
// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции.
// В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение(использовать switch).
*/


var operation,
  add,
  divide,
  mult,
  subs;

function mathOperation( arg1, arg2, operation ) {
  switch ( operation ) {
    case "add":
      return arg1 + arg2;
      break;
    case "divide":
      return arg1 / arg2;
      break;
    case "mult":
      return arg1 * arg2;
      break;
    case "subs":
      return arg1 - arg2;
      break;
    default:
      console.log( 'No comand is given' );
      break;
  }
}

console.log( mathOperation( 5, 1, "mult" ) );


/*
7. * Сравнить null и 0. Попробуйте объяснить результат.
*/

// Null это состояние отсутствия наполнения, тогда как 0 это число, либо указатель на false. 
// При этом если из null не получить ничего, то 0 может означать многое как содержимое обьекта



/*
8. * С помощью рекурсии организовать функцию возведения числа в степень.
*/

// Формат: function power(val, pow), где val– заданное число, pow– степень.
