function Apple () {
    var n = parseInt(window.document.getElementById("petya").value);
    var m =  parseInt(window.document.getElementById("masha").value);
    var d = 8;
    if (n < m) {
        n += m / 2;
        m = m/2;
    }
    if (m < 5) {
        m += 2;
        d -= 2;
    }
    if (n <= 7) {
        n = 0;
    } else {
        n -= 7;
    }
    if (n >= 10) {
        d += 10;
        n -= 10;
    } else {
        m -= 2;
        d += 2;
    }
    console.log(n);
    console.log(m);
    console.log(d);
}
