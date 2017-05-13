var n = 20,
    pyramid;

for ( var i = 1; i <= n; i++) {
	pyramid = '';
	for ( var j = 1; j <= i; j++ ) {
  pyramid += 'x';
  }
  console.log( pyramid );
}
