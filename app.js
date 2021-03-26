//Step 1:
//https://api.jquery.com/ready/#ready1 Learned how to use .ready() here.
$('document').ready(function(){
    console.log("Let's get ready to party with jQuery!");
})

//Step 2:
$('article img').addClass('image-center');

//Step 3:
//https://api.jquery.com/last-of-type-selector/#post-909 Learned how to use ':last-of-type' here.
$('p:last-of-type').remove();

//Step 4:
$('h1').css('fontSize', Math.ceil(Math.random()*100));

//Step 5:
$('ol').append('<li>What an adorable puppy!</li>')

//Step 6:
$('aside').text('');
$('aside').append('<p>Sorry about that list; it was kind of stupid.</p>');

//Step 7:
// https://api.jquery.com/val/  https://api.jquery.com/change/#change-handler https://beginnersbook.com/2019/05/jquery-change-method/#:~:text=jQuery%20change()%20Method%20triggers,()%20method%20triggers%20change%20event.Figured out how to let values change here.

$('.form-control').change(function(){
    let red = $('.form-control').eq(0).val();
    let green = $('.form-control').eq(2).val();
    let blue = $('.form-control').eq(1).val();
    $('body').css('background-color', `rgb(${red}, ${green}, ${blue})`);
});

//Step 8:
$('img').on('click', function(){
    $(this).remove();
})