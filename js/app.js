
$(document).ready(function(){
	
	
	/*--- Start Game ---*/
function newGame() {
  randomNumber = generateNumber();
  console.log(randomNumber);


function generateNumber(){
		var generateNumber = Math.floor((Math.random() * 100) + 1);
		console.log("New Number :" + generateNumber);

     return generateNumber;
}


/*
$("#guessButton").click(function(){
 		var z = $("input#userGuess").val();
 		console.log("z :" + z);
 		if 		(z <= 100) {
				$("#feedback").text(z);
        clearText;
        event,preventDefault();
    }
}); 
*/


function clearText() {
    $("userGuess").val('');
}

  /*--- Guess Counter ---*/
$("guessButton").click(function(){
    var counter = 0;
    z = $("#userGuess").val();
    z = parseInt(z);
    counter++;
    console.log(counter);
    $("span").text(counter);
    clearText;
    event.preventDefault();

		var differenceNum = Math.abs(generateNumber - z);
    console.log(differenceNum);
    if (z === generateNumber) {
        $("#feedback").text("Nailed It!");
    }
    else if (differenceNum >= 50) {
       $("#feedback").text("freezing");
 		} 
    else if (differenceNum >= 30) {
       $("#feedback").text("warmer")
    }
    else { (differenceNum >= 10) 
        $("#feedback").text("hot!");
}


function guessCheck(z) {
  if (isNan(z)) {
    $("#feedback").text("use a number")
  }
  else {
    return z;
  }
}

}); 


/*--- New Game ---*/


$(".new").click(function(){
	event.preventDefault();
   newGame();
}); 

    /*--- Display information modal box ---*/
    $(".what").click(function(){
      $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function(){
      $(".overlay").fadeOut(1000);
    });
}); 


