function mathOperation( arg1, arg2, operation ){
    switch (operation) {
        case '+':
          return ( arg1 + arg2 );
        break;
        case '-':
          return ( arg1 - arg2 );
        break;
        case '*':
          return ( arg1 * arg2 );
        break;
        case '/':
          return ( arg1 / arg2 );
        break;
        default:
        console.log( 'Please fill in correct value!' );
    }
}
console.log( mathOperation ( 2, 2, '+'));
