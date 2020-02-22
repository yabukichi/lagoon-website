// タブレット表示の切り替え
$('.buger').click(function() {
    $('.search').removeClass('none');
    $('.cancel').removeClass('none');
    $('.tb-fb').removeClass('none');
    $('.tb-ins').removeClass('none');
    $('.tb-twitter').removeClass('none');
    
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
    $('.tb-fb').removeClass('none');
    $('.tb-ins').removeClass('none');
    $('.tb-twitter').removeClass('none');
    
    $('.tb-contact').removeClass('none');
    $('.tb-event').removeClass('none');
    $('.buger').removeClass('none');
    $('.nav-item.search').removeClass('none');
    $('main').removeClass('none');
    $('footer').removeClass('none');
})

// $('.search.hover-block').click(function() {
//     $('header').addClass('shadow');
//     $('.search.hover-block').addClass('header-shadow');
// })
// $('.header-shadow').click(function() {
//     $('header').removeClass('shadow');
//     $('.search.hover-block').removeClass('header-shadow');
// })
