// $(".toggle").click(function(){

//   $("header").toggleClass("menuToggle");

// });

$(".toggle").click(function() {
    $("header").addClass("menuToggle");
});
$(".close").click(function() {
    $("header").removeClass("menuToggle");
});





$(window).scroll(function(){
    if ($(window).scrollTop() >= 30) {
        $('.site-header').addClass('fixed-header');
    }
    else {
        $('.site-header').removeClass('fixed-header');
    }
});

$('.moreless-button').click(function() {
  $('.moretext').slideToggle();
  if ($('.moreless-button').text() == "En savoir plus") {
    $(this).text("Lire moins")
  } else {
    $(this).text("En savoir plus")
  }
});


AOS.init({
    duration: 1200,
  })