//Figured out how to use radio buttons here: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
//Figured out how to select the right radio button here https://tutorialdeep.com/knowhow/get-selected-radio-button-value/

$('#movie-data-inputs').submit(function(e){
    e.preventDefault();
    let newTitle = $('#movie-title').val();
    let newRating = $('input[name = rating]:checked').val();
    $('#existing-movies').append(
        `<div class = 'movie'>
        <p><b>Movie:</b> ${newTitle}</p><p><b>Rating:</b> ${newRating}</p>
        <button class = 'remove-movie'>Remove Movie</button></div>`);
        $('.movie').on('click', '.remove-movie', function(){
            $(this).parent().remove();
        })
    })
