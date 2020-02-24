// タブレット表示の切り替え
$('.buger').click(function() {
    $('.search').removeClass('none');
    $('.cancel').removeClass('none');
    $('.tb-sns').removeClass('none');
    
    $('.nav-header').addClass('show');
    $('.tb-contact').addClass('none');
    $('.tb-event').addClass('none');
    $('.buger').addClass('none');
    $('.nav-item.search').addClass('none');
    $('main').addClass('none');
    $('footer').addClass('none');
})
$('.cancel').click(function() {
    $('.search').addClass('none');
    $('.cancel').addClass('none');
    $('.tb-sns').addClass('none');
    
    $('.nav-header').removeClass('show');
    $('.tb-contact').removeClass('none');
    $('.tb-event').removeClass('none');
    $('.buger').removeClass('none');
    $('.nav-item.search').removeClass('none');
    $('main').removeClass('none');
    $('footer').removeClass('none');
})

$('.search-cancel').click(function() {
    $('.header-tb-right').removeClass('show');
    $('.dropdown-menu').removeClass('show');
})
