$(() => {

    // hide spinner icon
    setTimeout(() => {
        $('body').css({
            "overflow": "visible"
        }).find('.spinner').fadeOut(700);
    }, 700);

    $(window).on('scroll', function () {
        let $s_stats = $('.section-stats')
        if ($("html,body").scrollTop() > 1800 && !$s_stats.hasClass('finished')) {

            $('.count').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                        $s_stats.addClass('finished')
                    }
                });
            });
        }
    })

    let $social_media = $('._team')

    $social_media.on('mouseenter', function () {
        $(this).find('.social-media-links,.overlay').animate({
            width: "100%",
            height: "100%"
        }, 500);
    })
    $social_media.on('mouseleave', function () {
        $(this).find('.social-media-links,.overlay').animate({
            width: 0,
            height: 0
        }, 500);
    })


})