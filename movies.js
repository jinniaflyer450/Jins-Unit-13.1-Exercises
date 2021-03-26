//Figured out how to use radio buttons here: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio


$('#movie-data-inputs').submit(function(){
    let newTitle = $('#movie-title').val();
    let newRating = $('input[name = rating]').val();
    console.log(newRating);
    $('#existing-movies').append(`<p>Movie: ${newTitle} Rating: ${newRating}</p>`);
})