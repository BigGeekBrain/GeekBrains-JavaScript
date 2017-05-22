var applePeter = N,
    appleMarie = M,
    appleDimon = 8;
if ( applePeter < appleMarie ){
    applePeter = appleMarie / 2;
    appleMarie /= 2;
} else if ( appleMarie < 5 ){
    appleMarie += 2;
    appleDimon -= 2;
} else if ( applePeter >= 7 ){
    applePeter -= 7;
} else if ( applePeter < 7 ){
    applePeter === 0;
} else if ( applePeter >= 10 ){
    applePeter -= 10;
    appleDimon += 10;
} else if ( applePeter < 10 ){
    appleDimon += 2;
    appleMarie -= 2;
}
console.log('У Маши яблок: ' + appleMarie);
console.log('У Пети яблок: ' + applePeter);
console.log('У Димы яблок: ' + appleDimon);
