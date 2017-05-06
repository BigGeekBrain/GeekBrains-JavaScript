var bilet = '933456';

var ch1 = +bilet%10;
var ch2 = (+bilet%100 - ch1)/10;
var ch3 = (+bilet%1000 - ch1 - ch2*10)/100;
var ch4 = (+bilet%10000 - ch1 -ch2*10 -ch3*100)/1000;
var ch5 = (+bilet%100000 - ch1 -ch2*10 -ch3*100 - ch4*1000)/10000;
var ch6 = (+bilet - ch1 - ch2*10 - ch3*100 - ch4*1000 - ch5*10000)/100000;
var sum1 = ch1 + ch2 + ch3;
var sum2 = ch4 + ch5 + ch6;

console.log(sum1 == sum2);