$('.landing-page').height(window.innerHeight + 'px');
$(function() {
  $('.skill-icons').hover(function() {
    $(this).animate({ color: '#4a56ad;' });
  }, function() {
    $(this).animate({ color: '#494949'});
  });
});
