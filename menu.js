$('.gnb-main-item').hover(function() {
  $(this).find('.sub').stop().slideDown(500);
  // stop의 역할은 마우스를 떼는 순간 바로 위로 올라가게 만드는 것이다.
  $(this).children('a').addClass('active');
  // children('a') this의 자식 요소의 a 클래스
}, function() {
  $(this).find('.sub').stop().slideUp(500);
  $(this).children('a').removeClass('active');
})

