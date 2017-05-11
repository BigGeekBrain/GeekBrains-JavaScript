var n = 10,
random = [],
sqr = [];

for ( var i = 1; i <= n; random.push(Math.trunc(Math.random()*1000)), i++){}

for ( i in random ) {
	sqr.push(random[i]*random[i]);
}

console.log( random );
console.log( sqr );