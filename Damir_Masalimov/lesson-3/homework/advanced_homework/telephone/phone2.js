var num = ['1', '2', '3', '4', '5', '6', '5', '8', '7', '9', '1', '0'],
res = [],
i=0, j, k, m, n, r,
len = num.length;


while ( i++ < len ) {
	j = 0;
	while ( j++ < len ) {
		k = 0;
		if ( i === j ) {
			continue;
		} else {
			while ( k++ < len ) {
				m = 0;
				if ( k === i || k === j ) {
					continue;
				} else {
					while ( m++ < len ) {
						n = 0;
						if ( m === i || m === j || m === k ) {
							continue;
						} else {
							while ( n++ < len ) {
								r = 0;
								if ( n === i || n === j || n === k || n === m ) {
									continue;
								} else {
									while ( r++ < len ) {
										if ( r === i || r === j || r === k || r === m || r === n ) {
											continue;
										} else {
											res.push(num[i-1]+num[j-1]+num[k-1]+num[m-1]+num[n-1]+num[r-1]);
										}
									}
								}
							}
						}
					}
				}
			}
		}

	}
}