var ticketNumber = 316613;
var a1 = ticketNumber % 10;
alert(a1);
var a2 = Math.floor(ticketNumber % 100 / 10);
alert(a2);
var a3 = Math.floor(ticketNumber % 1000 / 100);
alert(a3);
var a4 = Math.floor(ticketNumber % 10000 / 1000);
alert(a4);
var a5 = Math.floor(ticketNumber % 100000 / 10000);
alert(a5);
var a6 = Math.floor(ticketNumber % 1000000 / 100000);
alert(a6);

var sum1 = a1 + a2 + a3;
alert(sum1);
var sum2 = a4 + a5 + a6;
alert(sum2);

var result = sum1 == sum2 ? 'Счастливый билет' : 'Несчастливый билет';
console.log(result);
