jQuery(document).ready(function($){
    $('.search-field').hide();
    
    $('.search-icon').click(function(){
        $('.search-field').fadeToggle(1000);
        $('.search-field').css({
            'border' : '3px solid #a6d07b',
        });
    });
    
    $('.mobile-menu-ul').hide();
    $('.bars').click(function(){
        $('.menu-click').slideToggle(1000);
    });

    $('.header-slider-js').owlCarousel({
        loop:true,
        nav: false,
        dots: false,
        autoplay: true,
        dots: true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.recent-work-listbar li').on('click', function(){
        $('.recent-work-listbar li').removeClass('active');
        $(this).addClass('active');

        var slctr = $(this).attr('data-filter');

        $('.recect-work-list').isotope({
            filter: slctr,
        });
    });
    $('.recect-work-list').isotope();
    
    $('.work-logo-slider').owlCarousel({
        loop:true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    $('.features-body').hide();
    $('.history-body').show();
    $('.value-body').hide();

    $('.value-btn').click(function(){
        $('.value-body').slideDown();
        $('.features-body').hide();
        $('.history-body').hide();
        $('.core-bg div').removeClass('core-active');
        $(this).addClass('core-active');
    });

    $('.features-btn').click(function(){
        $('.value-body').hide();
        $('.history-body').hide();
        $('.features-body').slideDown();
        $('.core-bg div').removeClass('core-active');
        $(this).addClass('core-active');
    });

    $('.history-btn').click(function(){
        $('.features-body').hide();
        $('.value-body').hide();
        $('.history-body').slideDown();
        $('.core-bg div').removeClass('core-active');
        $(this).addClass('core-active');
    });

    $('.features-photo').parallaxie({
        speed: .8,
        offset: 50,
    });
});

