$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - 100;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
    var topBtn = $('#top-scroll');
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
      });
    topBtn.hover(
      function(){
      $(this).find("img").attr('src','images/hakushin-ic04_on.png');
      $(this).addClass("active");
    },
    function(){
      $(this).find("img").attr('src','images/hakushin-ic04.png');
      $(this).removeClass("active");
    });
    $("#list-slider").slick({
     autoplay: true,
     fade: true,
     arrow: false,
     autoplaySpeed: 5000,
     speed: 2000,
     infinite: true,
     dots: true
    });
  $('#carousel-slider').slick({
    autoplay: true,
    sliderShow: 3,
    centerMode: true,
    centerPadding: "40px",
    variableWidth: true,
    arrows: false,
    dots: true
  });
});
