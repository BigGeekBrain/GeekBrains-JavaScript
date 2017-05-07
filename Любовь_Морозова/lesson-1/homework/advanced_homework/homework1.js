// Проверка возраста в форме
function checkAge() {
    var a = window.document.getElementById("age").value;
    if (a < 18) {
        alert("Это закрытый раздел сайта!");
    } else {
        alert("welcome");
    }
}