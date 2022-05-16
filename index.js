

var random1=Math.random()*6+1  ;
var randomNumber1=Math.floor(random1);
var random2=Math.random()*6+1;
var randomNumber2=Math.floor(random2);


var dice1="dice"+randomNumber1+".png";
var dice2="dice"+randomNumber2+".png";


document.getElementsByClassName("img1")[0].src=dice1;
document.getElementsByClassName("img2")[0].src=dice2;



//document.querySelectorAll("img")[0].setAttribute("src",dice1);
//document.querySelectorAll("img")[1].setAttribute("src",dice2);

if(randomNumber1>randomNumber2){

document.getElementsByTagName("h1")[0].innerText="Player1 won";

}
else if (randomNumber2>randomNumber1){
    document.getElementsByTagName("h1")[0].innerText="Player2 won";
}
else{

    document.getElementsByTagName("h1")[0].innerText="It's a tie.";
}