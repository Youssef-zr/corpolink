$(() => {

    // hide spinner icon
    setTimeout(() => {
        $('body').css({
            "overflow": "visible"
        }).find('.spinner').fadeOut(700);
    }, 700);

    // tooltip function
    $('[data-toggle="tooltip"]').tooltip();

    // check scroll offset
    function checkScroll() {
        if ($(window).scrollTop() > 600) {
            $('.scroll-top').fadeIn(500)
        } else {
            $('.scroll-top').fadeOut(500)
        }
    }

    checkScroll();

    $(window).on('scroll', function () {
        checkScroll();
    });

    // scroll top btn
    $('.rocket').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500)
    })

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


    // open navigation bar
    $('.navbar-toggler').click(function () {
        $('#navbarColor02').slideToggle(300);
    })

    // dark mode
    $('.dark-mode span.light').click(function () {
        // hide icon light
        $('body').addClass('dark-mode');
        $(this).hide();
        $('.dark-mode  span.dark').show();

        localStorage.setItem('dark-mode', "true");

    })
    // light mode
    $('.dark-mode span.dark').click(function () {
        $('body').removeClass('dark-mode');
        $(this).hide();
        $('.dark-mode span.light').show();
        localStorage.removeItem('dark-mode');
    });

    if (localStorage.getItem('dark-mode') == 'true') {
        $('body').addClass('dark-mode');
        $('.dark-mode span.light').hide()
        $('.dark-mode  span.dark').show();
    }

})
