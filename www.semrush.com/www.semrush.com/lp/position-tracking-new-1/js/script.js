$(document).ready(function() {



    // Validtion forms for Safari

    webshim.activeLang('en');
    webshims.polyfill('forms');
    webshims.cfg.no$Switch = true;

    $(".scrollTo").on("click", function() {
        var idScroll = $(this).attr('data-scroll');
        $.scrollTo(idScroll, 1000);
        return false;
    });


    /*********    Year    *********/
    var now = new Date();
    year = now.getFullYear();
    $('.year').html(year);





    /*********  Fixed header  *********/

    $(window).scroll(function() {
        var scroll_position = $(window).scrollTop();
        var mobil_width = $(window).width();
        if (mobil_width > 200) {
            if (scroll_position > 750) {
                $('.nav').addClass('sticky');
            } else {
                $('.nav').removeClass('sticky');
            }
        } else {
            $('.nav').removeClass('sticky');
        }
    });




    /*********    Slider    *********/

    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    const slidesCount = document.querySelectorAll('#siema-slider .slide').length;
    console.log(slidesCount)

    function handleSlideChange() {
        const mQuery = window.matchMedia('(min-width: 575px)')
        const tQuery = window.matchMedia('(min-width: 992px)')

        switch (this.currentSlide) {
            case 0:
                prev.classList.add("disabled");
                break;
            case slidesCount - 1:
                next.classList.add("disabled");
                break;
            default:
                prev.classList.remove("disabled");
                next.classList.remove("disabled");
        }

        if (mQuery.matches) {
            switch (this.currentSlide) {
                case 0:
                    prev.classList.add("disabled");
                    break;
                case slidesCount - 2:
                    next.classList.add("disabled");
                    break;
                default:
                    prev.classList.remove("disabled");
                    next.classList.remove("disabled");
            }
        }

        if (tQuery.matches) {
            switch (this.currentSlide) {
                case 0:
                    prev.classList.add("disabled");
                    break;
                case slidesCount - 3:
                    next.classList.add("disabled");
                    break;
                default:
                    prev.classList.remove("disabled");
                    next.classList.remove("disabled");
            }
        }
    }

    const mySiema = new Siema({
        selector: '.siema',
        duration: 300,
        easing: 'ease-out',
        startIndex: 0,
        draggable: true,
        multipleDrag: true,
        // threshold: 40,
        // loop: true,
        // rtl: false,
        onInit: handleSlideChange,
        onChange: handleSlideChange,
        perPage: {
            992: 3,
            575: 2
        },
    });

    const index = mySiema.currentSlide;

    prev.addEventListener('click', () => mySiema.prev());
    next.addEventListener('click', () => mySiema.next());

});