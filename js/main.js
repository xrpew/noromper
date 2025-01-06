(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });


    $.getJSON( "../static/text/es.json", function( data ) {
        $.each( data, function( key, val ) {
            $("#"+key).html(val);
        });
    })

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('fast');
        } else {
            $('.back-to-top').fadeOut('fast');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 100, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 800
    });

    let langEsp = true
    // $("#translate").click(function(){
    //     langEsp = !langEsp
    //     if(langEsp){
    //         $.getJSON( "../static/text/es.json", function( data ) {
    //             $.each( data, function( key, val ) {
    //                 $("#"+key).html(val);
    //             });
    //         });
    //     }else{
    //         $.getJSON( "../static/text/en.json", function( data ) {
    //             $.each( data, function( key, val ) {
    //                 $("#"+key).html(val);
    //             });
    //         });
    //     }
    // })




    $("#translate").change(function() {
        const selectedLang = $(this).val(); // Obtiene el valor seleccionado (es o en)
        umami.track(`change-to-${selectedLang}`)
        // Define la ruta al archivo JSON según el idioma
        const jsonFile = selectedLang === "es" 
            ? "../static/text/es.json" 
            : "../static/text/en.json";
    
        // Obtiene los datos del archivo JSON y actualiza el contenido
        $.getJSON(jsonFile, function(data) {
            $.each(data, function(key, val) {
                $("#" + key).html(val);
            });
        });
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 45,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })

    
})(jQuery);

