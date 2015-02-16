
$(document).ready(function(){

    function newGame() {
      $("#feedback").text("Make Your Guess!");
      event.preventDefault();
      $("#userGuess").val(" ");
      ranNum = Math.floor((Math.random() * 100) + 1);
      //count = 0;
      $("#count").text(0);
      count = 0;
    }
 
  var ranNum = Math.floor((Math.random() * 100) + 1);
  var count = 0;
  var guess;

  $('#guessButton').click(function(){
    event.preventDefault();
    count++;
    $("#count").text(count);
       console.log(ranNum);
     guess = $('#userGuess').val();
     guess = parseInt(guess);
     var compareNum = Math.abs(guess-ranNum);
       console.log(compareNum);

    if ( compareNum == 0 ) {
     $("#feedback").text("Nailed It!");
    } 
    else if (compareNum >= 50) {
     $('#feedback').text("Ice cold!");
    }
    else if (compareNum >= 30 && compareNum < 50) {
     $('#feedback').text("Cold!");
    }
    else if ( compareNum >= 20 && compareNum < 30) {
     $('#feedback').text("Warm");
    }
    else if (compareNum >= 10 && compareNum < 20) {
     $('#feedback').text("Hot");
    }
    else if (compareNum >= 1 && compareNum < 10){
     $('#feedback').text("Very Hot!");
    }
    else {
     $('#feedback').text("Enter A Number");
    }      
            
  }); 
   
    
  
  $('.new').click(function(){
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
