
var positioninitial = 0;
    $(function () {
              $(window).on('scroll', function () {
                var scrolling = $(this).scrollTop();


                  if (scrolling > positioninitial) {
                      $('.main-header').hide();
                  } else {
                      $('.main-header').show();
                  }
                  positioninitial = scrolling;
              });
          });

//scrollbar//

$(function () {
  $(window).on('scroll', function() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  });

});
