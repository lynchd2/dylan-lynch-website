$(document).ready(function(){

$(".dylan-lynch").hover(function(){
  $('.brackets-name').addClass("name-occupation-hovered")
}, function() {
  $('.brackets-name').removeClass("name-occupation-hovered")
});

$(".occupation-container").hover(function(){
  $(".brackets-occupation").addClass("name-occupation-hovered")
}, function() {
  $(".brackets-occupation").removeClass("name-occupation-hovered")
});

  $(".github-black").hover(function() {
    $(this).addClass("github-white", "slow")
    $(this).removeClass("github-black", "slow")
  }).mouseleave(function() {
    $(this).addClass("github-black", "slow")
    $(this).removeClass("github-white", "slow")
  });

$('.arrowBottomAbout').click(function () {
    $('html, body').animate({scrollTop:$(document).height() - 630}, 'slow');
    return false;
});

$('.arrowTopAbout').click(function () {
    $('html, body').animate({scrollTop:0}, 'slow');
    return false;
});

$(".firstProject").click(function() {
  $("html, body").animate({scrollTop:$(document).height() - 2090}, 'slow');
  return false;
});

$(".secondProject").click(function() {
  $("html, body").animate({scrollTop:$(document).height() - 1290}, 'slow');
  return false;
});

$(".thirdProject").click(function() {
  $("html, body").animate({scrollTop:$(document).height() - 400}, 'slow');
  return false;
});

$(window).scroll(function(){
    $(".arrowBottomAbout").css("opacity", 1 - $(window).scrollTop() / 250); 
    $(".navbar").css("opacity", 0.7)
    $(".navbar").css("background-color", "grey")
  });

var repeat = false; 
$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 400;
 
    console.log(repeat)

    if(!repeat && y_scroll_pos > scroll_pos_test ) {
      repeat = true;
      $(".about-typed").typed({
                  strings: ["My name is Dylan Lynch.", "I enjoy building things, breaking those thhhIINGG.Sj!901%{{n", "I enjoy building things, breaking those things, and then fixing them.",
                   "I am an avid runner, I enjoy reading and I love traveling and exploring \n the world."],
                  typeSpeed: -10, 
                  backspace: function(curString, curStrPos){
                  // check string array position
                  // on the first string, only delete one word
                  // the stopNum actually represents the amount of chars to
                  // keep in the current string. In my case it's 3.
                  if (self.arrayPos == 1){
                      self.stopNum = 3;
                  }
                  //every other time, delete the whole typed string
                  else{
                      self.stopNum = 0;
                  }
                }
            })
          }
        })
});
  
