var ramNum1 = Math.floor(Math.random()*6)+1; // generate random num from 1-6

var ramDiceImg = "dice" + ramNum1 + ".png" ; // getting dice1-dice6.png

var ramImgSource1 = "images/" + ramDiceImg; // linking to dice images (in images folder)

document.querySelectorAll("img")[0].setAttribute("src", ramImgSource1); // set the attribute 

var ramNum2 = Math.floor(Math.random()*6)+1;

var ramDiceImg2 = "dice" + ramNum2 + ".png";

var ramImgSource2 = "images/" + ramDiceImg2;

document.querySelectorAll("img")[1].setAttribute("src", ramImgSource2);

if (ramNum1 > ramNum2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if (ramNum2 > ramNum1){
    document.querySelector("h1").innerHTML="Player 2 Wins"
}
else {
    document.querySelector("h1").innerHTML="Draw!"
}
