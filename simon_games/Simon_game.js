var buttonColours = ["red", "blue", "green", "yellow"]; // array with colors index 0-3

var gamePattern = []; // empty array to store the randomChosenColor sequence
var userClickedPattern = []; // to store the button pattern clicked

var started = false;
var level = 0; // To start game from the beggining

// press A key to start the game
$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

// handler function to store the button pattern clicked
$(".btn").click(function() {

  var userChosenColour = $(this).attr("id"); // stores the id of the button clicked
  userClickedPattern.push(userChosenColour); // push the button clicked into empty arry of userClickedPattern

  playSound(userChosenColour); // overriding name with usecChosenColor to play audio
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart. Your missed at "+level);

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}

// sequence function
function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4); // Give a random number from 0-3
  var randomChosenColour = buttonColours[randomNumber]; //chooses a random color using radomNumber given bcoz its an array
  gamePattern.push(randomChosenColour); // push the randomChosenColor to empty array to store sequence

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100); // choosing the color id for animation
  playSound(randomChosenColour); // playing audio using randomChosenColor by overriding name
}

// animation pressed
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

// play audio function
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
