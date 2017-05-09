var a = -2, b = -3, sum1, sum2, sum3;
if (a >= 0 && b >= 0){
    sum1 = a - b;
}else if (a < 0 && b < 0){
    sum2 = a * b;
}else if ((a < 0 && b > 0) || (a > 0 && b < 0)){
    sum3 = a + b;
}
console.log(sum1, sum2, sum3);
