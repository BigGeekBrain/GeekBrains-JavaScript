function validationForm() {
    validate = true;
    if (document.form.age.value >= 18){
        alert('Вы проходите в следующий тур');
    } else if(document.form.age.value < 18){
        alert('Пшёл отседова!');
    }
    return validate;
}
