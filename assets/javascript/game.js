 // runs on page load ?????
 // window.onload = function() {
$(document).ready(function () {  
 // vars for win , loss , score 
 var winCount = 0;
 var lossCount = 0;
 var score = 0;

// randNumber score to match range from 19-120
 var randNum = Math.floor(Math.random() * (120)) + 19;

// crystal values created
 var gemNum = Math.floor(Math.random() * (12)) + 1;

// vars for display
 var winCountText = $("#wins-display");
 var lossCountText = $("#loss-display");
 var randNumText = $("#randNum-display");
 var scoreText = $("#score-display");

 // change wins , losses , score and randNum for score to match
 winCountText.text(winCount);
 lossCountText.text(lossCount);
 randNumText.text(randNum);
 scoreText.text(score);

    // button to reset for restarting game and resetting values
    $("#reset-btn").on("click", function() {
        randNum = Math.floor(Math.random() * (120)) + 19;
        randNumText.text(randNum)
        gemNum = Math.floor(Math.random() * (12)) + 1;
        winCount = 0;
        winCountText.text(winCount);
        lossCount = 0;
        lossCountText.text(lossCount);
        score = 0;
        scoreText.text(score);
    });

    // reset when game is over
    function reset() {
        randNum = Math.floor(Math.random() * (120)) + 19;
        gemNum = Math.floor(Math.random() * (12)) + 1;
        winCountText.text(winCount);
        lossCountText.text(lossCount);
        randNumText.text(randNum)
        score = 0;
        scoreText.text(score);
    }

    // establish gem numbers 1-12
    $(".gem-btn").each(function(){
        var gemNum = Math.floor(Math.random() * (12)) + 1;
        $(this).attr("data-value", gemNum);    
    }) 
        
    // using gem numbers from above to generate score
    $(".gem-btn").on("click", function () {
        score = score + parseInt($(this).attr("data-value"));


        // if your score is equal to score to match then win +1
        if (score === randNum) {
            winCount++;
            // reset
            reset();
        }

        // if your score is greater than score to match then loss +1
        else if (score > randNum) {
                lossCount++;
                // reset
                reset();
        }

        else {
                winCountText.text(winCount);
                lossCountText.text(lossCount);
                randNumText.text(randNum);
                scoreText.text(score);
            }
        });
    });