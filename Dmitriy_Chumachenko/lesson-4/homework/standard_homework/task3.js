var accept = prompt ('Желаете принять участи в игре "Кто хочет стать миллионером?\n y-"да", остальное-"нет"')
if (accept == 'y') {
    alert ('Вперед к мечте!!! ');
    function Answer ( correct ) {
        this.correct = correct,
        this.compare = function (question) {
            var count = 0;
            
            if ( this.correct == question.correct) {
                count += 1000;
                alert ( 'Правильный ответ + ' + count + ' рублей' );
            }  else {
                alert ( 'Неправильный ответ./n "Конец игры" ' );
            }
        }
    }
    
    var question_1 = prompt ('Какая планета ближе к СОЛНЦУ ?\n a.Марс\n b.Юпитер\n c.Венера\n d.Земля' );
    var correct_answer_1 = new Answer ( 'a' );
    var answer_1 = new Answer ( question_1 );
    correct_answer_1.compare( answer_1 );
    
    var question_2 = prompt ('В каком году была Куликовская битва ?\n a.1260\n b.1380\n c.1546\n d.2000' );
    var correct_answer_2 = new Answer ( 'b' );
    var answer_2 = new Answer ( question_2 );
    correct_answer_2.compare( answer_2 );
    
    window.onload = Answer;
    
} else {
    alert ('Жаль!');
}