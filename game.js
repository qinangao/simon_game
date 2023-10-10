buttonColours = ["red", "blue", "green", "yellow"];
gamePattern = [];
userClickedPattern = []; //step 4-3

$(".btn").on("click", function () {
  var userChosenColour = $(this).attr("id"); //step4-2
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern); //step4-4
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).animate({ opacity: 0.2 }, 100, function () {
    $("#" + randomChosenColour).animate({ opacity: 1 }, 100);
  });

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}
