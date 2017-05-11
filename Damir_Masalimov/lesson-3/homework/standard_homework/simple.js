var i = 2,
    n = 100,
    simple = [],
    sum,
    k;

simple.push( i++ );


while ( i <= n ) {
    k = 3;
    sum = 0;

    while ( k < i ) {
        if ( i % k === 0 ) {
            ++sum;
            if ( sum > 0 ) {
                break;
            }
        }
        k += 2;
    }
    if ( sum === 0 ) {
        simple.push( i );
    }
    i += 2;
}

console.log( simple );
