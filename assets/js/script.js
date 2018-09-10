
//GENERIC BUTTON ON CLICK
$("button").on("click", function () {
    //GRAB ASSIGNED DATA_STATE FROM BUTTON CLICKED
    var state = $(this).attr("data-state");
    //RUN IT THROUGHT THE GIPHY API && CALL ON AJAX TO DO ITS THNG
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
                gifDump.append(rate);
                gifDump.append(gif);

                $("#whereTheGifsGo").prepend(gifDump);




            }

        });


});
