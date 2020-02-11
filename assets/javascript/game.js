   
// vars for win , loss , score 
 var winCount = 0;
 var lossCount = 0;
 var score = 0;

// randNumber score to match range from 19-120
 var randNum = Math.floor(Math.random() * (102)) + 19;

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

//  function to prevent zoom on double tap on mobile devices
 (function($) {
    var count = 0;
    $.fn.nodoubletapzoom = function() {
        $(this).bind('touchstart', function preventZoom(e){
            var t2 = e.timeStamp;
            var t1 = $(this).data('lastTouch') || t2;
            var dt = t2 - t1;
            var fingers = e.originalEvent.touches.length;
            $(this).data('lastTouch', t2);
            if (!dt || dt > 500 || fingers > 1){
                return; // not double-tap
            }
            e.preventDefault(); // double tap - prevent the zoom
            // also synthesize click events we just swallowed up
            $(e.target).trigger('click');
        });
    };
    })(jQuery);

    $(document).on('pageinit',"#status_page", function(){
        $("body").nodoubletapzoom();
        $(".content").on("click", "#but", function() {
            var curr_val = parseInt($("#val").text());
            $("#val").text(curr_val + 1);
        });
});


    // reset when game is over
    function reset() {
    randNum = Math.floor(Math.random() * (102)) + 19;
    // establish gem numbers 1-12
    $(".gem-btn").each(function(){
            var gemNum = Math.floor(Math.random() * (12)) + 1;
            $(this).attr("gem-value", gemNum); 
    }) 
        winCountText.text(winCount);
        lossCountText.text(lossCount);
        randNumText.text(randNum);
        score = 0;
        scoreText.text(score);   
    }

    // button to reset for restarting game and resetting values
    $("#reset-btn").on("click", function() {
        randNum = Math.floor(Math.random() * (102)) + 19;
        // establish gem numbers 1-12
        $(".gem-btn").each(function(){
            var gemNum = Math.floor(Math.random() * (12)) + 1;
            $(this).attr("gem-value", gemNum); 
        }) 
        winCount = 0;
        winCountText.text(winCount);
        lossCount = 0;
        lossCountText.text(lossCount);
        randNumText.text(randNum);
        score = 0;
        scoreText.text(score);
    });
       

$(document).ready(function() {
                reset();

        // using gem numbers from above to generate score
        $(".gem-btn").on("click",function() {
            score = score + parseInt($(this).attr("gem-value"));

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