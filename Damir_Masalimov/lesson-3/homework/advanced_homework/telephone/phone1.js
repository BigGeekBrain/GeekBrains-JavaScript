var num = ['1', '2', '3', '4', '5', '6', '5', '8', '7', '9', '1', '0'],
res = [],
i, j, k, m, n, r,
len = num.length;


for ( i = 0; i < len; i++ ) {
	for ( j = 0; j < len; j++ ) {
		if ( i === j ) {
			continue;
		} else {
			for ( k = 0; k < len; k++ ) {
				if ( k === i || k === j ) {
					continue;
				} else {
					for ( m = 0; m < len; m++ ) {
						if ( m === i || m === j || m === k ) {
							continue;
						} else {
							for ( n = 0; n < len; n++ ) {
								if ( n === i || n === j || n === k || n === m ) {
									continue;
								} else {
									for ( r = 0; r < len; r++ ) {
										if ( r === i || r === j || r === k || r === m || r === n ) {
											continue;
										} else {
											res.push(num[i]+num[j]+num[k]+num[m]+num[n]+num[r]);
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