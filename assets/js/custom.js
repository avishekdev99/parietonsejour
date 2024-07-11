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
        $('header').addClass('fixed-header');
        $('header').addClass('visible-title');
    }
    else {
        $('header').removeClass('fixed-header');
        $('header').removeClass('visible-title');
    }
});

     $('.moreless-button').click(function() {
  $('.moretext').slideToggle();
  if ($('.moreless-button').text() == "Přečtětesivíce") {
    $(this).text("číst méně")
  } else {
    $(this).text("Přečtětesivíce")
  }
});


AOS.init({
    duration: 1200,
  })