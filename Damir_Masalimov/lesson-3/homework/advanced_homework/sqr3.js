var n = 10,
random = [],
sqr = [];

for ( var i = 1; i <= n; random.push(Math.trunc(Math.random()*1000)), i++){}

i = 1;

do {
	sqr.push(random[i-1]*random[i-1]);
} while( i++ < random.length )

console.log( random );
console.log( sqr );