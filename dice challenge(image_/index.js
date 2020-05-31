function rolldice(){

var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomImage = "dice"+randomNumber+".png";
var randomDice = "images/"+randomImage;
 var image1= document.querySelectorAll("img")[0];
 image1.setAttribute("src",randomDice);




 var randomNumber1 = Math.floor(Math.random() * 6) + 1;
 var randomImage = "dice"+randomNumber1+".png";
 var randomDice = "images/"+randomImage;
  var image2= document.querySelectorAll("img")[1];
  image2.setAttribute("src",randomDice);


  var heading = document.querySelector("h2");


  if (randomNumber1<randomNumber)
  {
    heading.innerHTML="player1 win";
  }
else if(randomNumber1>randomNumber){
  heading.innerHTML = "player2 win";

}
else{
  heading.innerHTML = "equal";
}
}
