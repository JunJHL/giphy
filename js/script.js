// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
let key;
let link; 

$("#search-button").click(function(){
    
    key = $("input").val();
    link = "https://api.giphy.com/v1/gifs/search?q=" +  key + "&rating=pg&api_key=dc6zaTOxFJmzC";
    
    $.ajax({
      url: link,
      medthod: "GET",
      success: function(response) {
        $(".row justify-content-center").text("");          
        $(".container").text("");
        
          response.data.forEach(function(repeat){
               $(".container").append(`<img src= ${repeat.images.fixed_width.url} >`);
          })
      }
  })
  
});

