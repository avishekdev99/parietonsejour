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
  if ($('.moreless-button').text() == "Apprendre encore plus") {
    $(this).text("Apprendre moins")
  } else {
    $(this).text("Apprendre encore plus")
  }
});


AOS.init({
    duration: 1200,
  })