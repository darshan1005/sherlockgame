function roll(){
  
      /*random numbers */
      var dice1= document.getElementById("dice_1").innerHTML = Math.floor(Math.random()*6)+1;
      var dice2= document.getElementById("dice_2").innerHTML = Math.floor(Math.random()*6)+1;      

      var result = document.getElementById("sum_result").innerHTML = dice1+dice2;
    

     /*images*/
     var randomDiceImage = "dice" + dice1 + ".png";
     var randomImagesrc = "images/" + randomDiceImage;
     document.querySelectorAll("img")[0].setAttribute("src",randomImagesrc);
    //  var images = document.querySelectorAll("img")[0];
    //  images.setAttribute("src", randomImagesrc);

    var randomImagesrc2 = "images/dice" + dice2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src",randomImagesrc2);

    document.getElementById("hurry").innerHTML = "Hurry ! the game has started"


    if(dice1 === 6 && dice2 === 6){
      document.querySelector("h2").innerHTML = "You won the game 🤩🤩";
    }

    else if (dice1 === 1 && dice2 === 1){
      document.querySelector("h2").innerHTML = "Oops! you lost the game 😟😟";
    }
    else{
      document.querySelector("h2").innerHTML = "Check your result to win 🫣🫣"
    }


}

