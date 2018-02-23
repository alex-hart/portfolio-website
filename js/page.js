$('.landing-page').height(window.innerHeight + 'px');
$(function() {
  $('.skill-icons').hover(function() {
    $(this).animate({ color: '#4a56ad;' });
  }, function() {
    $(this).animate({ color: '#494949'});
  });
  $('#continue-reading').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
  });
});
