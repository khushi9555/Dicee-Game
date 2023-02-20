var randnum1 = Math.floor(Math.random()*6) + 1;
var randnum1imag = "images/dice" + randnum1 + ".png";

var randnum2 = Math.floor(Math.random()*6) + 1;
var randnum2imag = "images/dice" + randnum2 + ".png";


document.querySelectorAll("img")[0].setAttribute("src" , randnum1imag) ;
document.querySelectorAll("img")[1].setAttribute("src" , randnum2imag) ;

if(randnum1 > randnum2){
  document.querySelector("h1").innerHTML = "<img src='images/flag.png' alt='flag' style = 'width : 120px'> Player 1 Wins!";
}
else if(randnum2 > randnum1){
  document.querySelector("h1").innerHTML = "Player 2 Wins! <img src='images/flag.png' alt='flag' style = 'width : 120px'> ";
}
else{
  document.querySelector("h1").innerHTML = "Draw";
}
