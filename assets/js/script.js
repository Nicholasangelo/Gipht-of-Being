$(document).ready()


// function starter() {
var inhale = 4;
var hold = 7;
var exhale = 8;

setTimeout(threeSeconds, 1000 * 3);
setTimeout(fourSeconds, 1000 * 8);
setTimeout(sevenSeconds, 1000 * 15);
setTimeout(eightSeconds, 1000 * 24);
setTimeout(thirtyTwoSeconds, 1000 * 32);

$("#first").hide();
$("#second").hide();
$("#third").hide();
$("#fourth").hide();
$("#fifth").hide();



function threeSeconds() {
    $("#first").show();
}
function fourSeconds() {
    $("#first").hide();
    $("#second").show().append(inhale--);
}
function sevenSeconds() {
    $("#second").hide();
    $("#third").show().append(hold--);
}
function eightSeconds() {
    $("#fourth").show().append(exhale--);
    $("#third").hide();
}

function thirtyTwoSeconds() {
    $("#fourth").hide();
    $("#fifth").show();
    $("#startBeing").on("click", function (event) {
        $("#fifth").hide();
        $("#allInside").css("display", "block");
    
    });
}

    // }
    // ARRAY TO HOLD BUTTONS AND USER CREATED BUTTONS
    userState = ["happy", "sad", "shocked"];

    // MAKE BUTTON FUNCTION
    function makeThemButtons() {
        // EMPTY USERBUTTON FIELD
        $("#whereTheButtonsGo").empty();

        // LOOP THROUGH NEW BUTTONS TO SEE WHATS NEW
        for (var i = 0; i < userState.length; i++) {
            // CREATE A NEW BUTTON ELEMENT TO PUSH USER BUTTONS INTO, ADD CLASS AND DATA TO CALL LATER
            var newButtons = $("<button>");
            newButtons.addClass("gifButtons");
            newButtons.attr("data-state", userState[i]);
            // TEXT OF BUTTON SHOULD MATCH DATA
            newButtons.text(userState[i]);
            // APPEND TO HTML LIST OF BUTTONS
            $("#whereTheButtonsGo").append(newButtons);
            // NOW YOURE MAKING BUTTONS
            console.log(newButtons);
        }

    }

    //GENERIC BUTTON ON CLICK
    $(document).on("click", ".gifButtons", function () {
        //GRAB ASSIGNED DATA_STATE FROM BUTTON CLICKED
        var state = $(this).attr("data-state");
        //RUN IT THROUGH THE GIPHY API && CALL ON AJAX TO DO ITS THNG
        var queryURL = "http://api.giphy.com/v1/gifs/search?limit=10&q=" + state + "&api_key=dOVm5a9T7kXu2CSpPOBZgDsAJRaCa22a";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                console.log(response);
                //LOOKING FOR THE DATA OF EACH RETURNED OBJECT, LOOPING THROUGH THR TEN RETURNED
                var result = response.data;

                for (let i = 0; i < result.length; i++) {
                    //CREATE A DIV TO PUT RATING AND IMG INSIDE, GRAB RATING, GRAB IMG
                    var gifDump = $("<div>");
                    var rate = $("<p>").text("Rating: " + result[i].rating);
                    var gif = $("<img>").attr("src", result[i].images.fixed_height.url);
                    // gif.addClass("theGif");
                    //gif.data("animate: go")
                    gifDump.append(rate);
                    gifDump.append(gif);

                    $("#whereTheGifsGo").prepend(gifDump);




                }

            });


    });
    $("#add-state").on("click", function (event) {
        event.preventDefault();
        var newState = $("#state-input").val().trim();
        userState.push(newState);
$("#state-input").val("");
        makeThemButtons();
    })

    makeThemButtons();



// $(".theGif").on("click", function () {
//     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
//     var animate = $(this).attr("data-animate");
//     // If the clicked image's state is still, update its src attribute to what its data-animate value is.
//     // Then, set the image's data-state to animate
//     // Else set src to the data-still value
//     if (animate === "still") {
//         $(this).attr("src", $(this).attr("data-animate"));
//         $(this).attr("data-state", "animate");
//     } else {
//         $(this).attr("src", $(this).attr("data-still"));
//         $(this).attr("data-animate", "still");
//     }
// });
