$(document).ready(function() {
    $('.switch').hover(function() {
            $(this).find('.hero').hide();
            $(this).find('.counter').show();
        }, function() {
            $(this).find('.counter').hide();
            $(this).find('.hero').show();
    });

    $(document).scroll(function() {
        var fromTopPx = 500; // distance to trigger
        var scrolledFromtop = $(document).scrollTop();
        if(scrolledFromtop > fromTopPx){
            $('.hero-image').css('background-image', 'url(https://i.imgur.com/9ll4Kmc.jpg)');
        }
    });

    $('.hero-image').click(function() {
        $(this).css('background-image', 'url(https://wallpaperspal.com/wp-content/uploads/Overwatch-2015-Game-Logo-Wallpaper.jpg)');
    });
});
