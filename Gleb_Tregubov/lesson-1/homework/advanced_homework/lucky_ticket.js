var ticketNumber = 316613;
var a1 = ticketNumber % 10;

var a2 = Math.floor(ticketNumber % 100 / 10);

var a3 = Math.floor(ticketNumber % 1000 / 100);

var a4 = Math.floor(ticketNumber % 10000 / 1000);

var a5 = Math.floor(ticketNumber % 100000 / 10000);

var a6 = Math.floor(ticketNumber % 1000000 / 100000);


var sum1 = a1 + a2 + a3;

var sum2 = a4 + a5 + a6;

var result = sum1 == sum2 ? 'Счастливый билет' : 'Несчастливый билет';
console.log(result);
