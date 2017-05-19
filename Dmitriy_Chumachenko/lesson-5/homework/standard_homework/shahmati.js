var container = document.getElementById('container'),
    black = Array.from(container.getElementsByClassName('inner-black')),
    white = Array.from(container.getElementsByClassName('inner-white'))

// Раскрашиваем доску
for (var i = 0; i < black.length; i++) {
    black[i].style.backgroundColor = "#9d4b40";
}  
for (var i = 0; i < white.length; i++) {
    white[i].style.backgroundColor = "#c6a09b";
} 

// Расставляем шахматы
function addChess (){
    // Расставляем белые
    
    document.getElementById("A1").innerHTML="<img src='chess-figures/ladya_white.png' height='40'>";
    document.getElementById("H1").innerHTML="<img src='chess-figures/ladya_white.png' height='40'>";
    document.getElementById("B1").innerHTML="<img src='chess-figures/kon_white.png' height='40'>";
    document.getElementById("G1").innerHTML="<img src='chess-figures/kon_white.png' height='40'>";
    document.getElementById("C1").innerHTML="<img src='chess-figures/slon_white.png' height='40'>";
    document.getElementById("F1").innerHTML="<img src='chess-figures/slon_white.png' height='40'>";
    document.getElementById("D1").innerHTML="<img src='chess-figures/ferz_white.png' height='40'>";
    document.getElementById("E1").innerHTML="<img src='chess-figures/korol_white.png' height='40'>";
    
    var peshka_white = Array.from(container.getElementsByClassName('peshka_white'));
    for (i = 0; i < peshka_white.length; i++) {
        peshka_white[i].innerHTML="<img src='chess-figures/peshka_white.png' height='40'>";
} 
   
    // Расставляем черные
    
    document.getElementById("A8").innerHTML="<img src='chess-figures/ladya_black.png' height='40'>";
    document.getElementById("H8").innerHTML="<img src='chess-figures/ladya_black.png' height='40'>";
    document.getElementById("B8").innerHTML="<img src='chess-figures/kon_black.png' height='40'>";
    document.getElementById("G8").innerHTML="<img src='chess-figures/kon_black.png' height='40'>";
    document.getElementById("C8").innerHTML="<img src='chess-figures/slon_black.png' height='40'>";
    document.getElementById("F8").innerHTML="<img src='chess-figures/slon_black.png' height='40'>";
    document.getElementById("D8").innerHTML="<img src='chess-figures/ferz_black.png' height='40'>";
    document.getElementById("E8").innerHTML="<img src='chess-figures/korol_black.png' height='40'>";
    
    var peshka_black = Array.from(container.getElementsByClassName('peshka_black'));
    for (i = 0; i < peshka_black.length; i++) {
        peshka_black[i].innerHTML="<img src='chess-figures/peshka_black.png' height='40'>";
} 
    
    
}

