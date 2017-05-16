var number = parseInt(prompt('Введите число от 0 до 999'));
if (number < 0 || isNaN(number)) {
    console.log('Нужно вводить число от 0 до 999');
} else {
    sotni = +Math.floor(number / 100);
    desyatki = +Math.floor((number - sotni * 100) / 10);
    edinici = +number - (sotni * 100 + desyatki * 10);

    function Objekt(edinici, desyatki, sotni) {
        this.edinici = edinici,
            this.desyatki = desyatki,
            this.sotni = sotni
    }
    var chislo = new Objekt(edinici, desyatki, sotni)
    if (number > 999) {
        chislo.edinici = '';
        chislo.desyatki = '';
        chislo.sotni = '';
        console.log(chislo);
    } else {
        console.log(chislo);
    }

}
