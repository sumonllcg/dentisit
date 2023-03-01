$(document).ready(function () {

    //   slide-menu-start
    $('.mani-m-b').click(function () {
        $('.mani-m-b').toggleClass('mani-m-b-2');
        $('.main-menu > ul').slideToggle();
    });



    // video-play-start
    $('.video-buttton').click(function () {
        $('.banner-video').addClass('banner-video-block');
    });
    $('.video-close').click(function () {
        $('.banner-video').removeClass('banner-video-block');
    });
    // video-play-end

    //   more-less-start
    $('.more-less span').click(function () {
        $('.h-family-text-hide').slideToggle();
        if ($('.more-less span').text() == 'more') {
            $(this).text('less');
        } else {
            $(this).text('more');
        }
    });
    //   more-less-end

    //  tabs-area-start
    // active tabs li
    $('.button-two li').click(function () {
        $('.button-two li').removeClass('active');
        $(this).addClass('active')
        var a_all = $(this).attr('data-tab')
        $('.single-div').removeClass('active-two');
        $('#' + a_all).addClass('active-two');
    });
    //   home-tabs-area
    $('.button_one li').click(function () {
        $('.button_one li').removeClass('active_h');
        $(this).addClass('active_h');
        var a = $(this).attr('data-tab');
        $('.H_single-div').removeClass('active-two');
        $('#' + a).addClass('active-two');

    });
    //  tabs-area-end

    // home-accrodient-area-start
    $('.acc-head').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).siblings('.acc-content').slideUp();
            $(this).removeClass('active');
        } else {
            $('.acc-content').slideUp();
            $('.acc-head').removeClass('active');
            $(this).siblings('.acc-content').slideToggle();
            $(this).toggleClass('active');
        }
    });
    // home-accrodient-area-end

    //   owlCarousel menu

    var width = $(document).width();
    if (width < 1200) {
        $('.H_single-div_active').owlCarousel({
            items: 3,
            margin: 20,
            nav: true,
            center: true,
            responsive: {
             992: {
                  items: 3
                },
             280: {
                items: 1,
             },
             180: {
                items: 1
             }

            }
        });
    }else {}

});


// windows function
$(window).scroll(function () {
    var sticky = $('.header-top-section');
    var height = $(window).scrollTop();
    if (height > 5) {
        sticky.addClass('header-top-section-fixed');
    } else {
        sticky.removeClass('header-top-section-fixed');
    }

    if (height > 5) {
        $('.location-area').addClass('location-none');
    } else {
        $('.location-area').removeClass('location-none');
    }
});