$(function(){
    var pagetop = $('#arrow_top');
    // ボタン非表示
    pagetop.hide();
    // 100px スクロールしたらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
});


// フッター手前で止める
$(window).on("scroll", function() {
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();
    footerHeight = $(".footer-wrapper").innerHeight();
    if ( scrollHeight - scrollPosition  <= footerHeight ) {
      $("#arrow_top").css({
        "bottom": footerHeight,
        "transition": "all 0.5s ease-in",
      });
    } else {
      $("#arrow_top").css({
        "position":"fixed",
        "bottom": "10%",
      });
    }
  });