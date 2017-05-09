//Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
//где arg1, arg2 – значения аргументов, operation – строка с названием операции.
//В зависимости от переданного значения операции выполнить одну из арифметических операций
//(использовать функции из пункта 3) и вернуть полученное значение (использовать switch).


var arg1, arg2, operation;
arg1 = 3;
arg2 = 5;
switch (operation) {
    case '+':
        function mathOperation( arg1, arg2, operation ){
          sum1 = arg1 + arg2;
          return sum1;
        }
        console.log( mathOperation() );
        break;
    case '-':
        function mathOperation( arg1, arg2, operation ){
          sum2 = arg1 + arg2;
          return sum2;
        }
        console.log( mathOperation() );
        break;
    case '*':
        function mathOperation( arg1, arg2, operation ){
          sum3 = arg1 * arg2;
          return sum3;
        }
        console.log( mathOperation() );
        break;
    case '/':
        function mathOperation( arg1, arg2, operation ){
             sum4 = arg1 - arg2;
        return sum4;
        }
        console.log( mathOperation() );
        break;
    default:
    console.log( 'Please fill in correct value!' );

}
function mathOperation( arg1, arg2, operation ){
    var arg1, arg2, operation;
    switch (operation) {
        case '+':
          sum1 = arg1 + arg2;
          return sum1;
        break;
        default:
        console.log( 'Please fill in correct value!' );
}
