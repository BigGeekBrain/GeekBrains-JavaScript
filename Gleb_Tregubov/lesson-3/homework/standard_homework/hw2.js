var i = 0;
console.log( 0 + ' - Это ноль' );
do {
    i++;
    if (i % 2 == 0){
        console.log(i + ' - Четное' );
    } else {
        console.log( i + ' - Нечетное' );
    }
} while (i < 10);
