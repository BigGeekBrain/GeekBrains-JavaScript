var n = 10,
random = [],
sqr = [];

for ( var i = 1; i <= n; random.push(Math.trunc(Math.random()*1000)), i++){}

i = 0;

while ( i++ < random.length) {
	sqr.push(random[i-1]*random[i-1]);
}

console.log( random );
console.log( sqr );