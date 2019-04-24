$(document).ready(function () {
    var slider = {
        slideWidth: 300,  //Ширина одного слайда
        sliderTime: 2000,   //Интервал смены кадров
        nextSlide() {

            var currentSlide = parseInt($('.slider').data('current'));
            currentSlide++;
            if (currentSlide >= $('.slider__item').length) {
                currentSlide = 0;
            }

            // передвигаем список слайдов
            $('.slider').animate({left: -currentSlide * slider.slideWidth}, 300)
            $('.slider').data('current', currentSlide);
        },
        startSlider() {

            $('.slider').width($('.slider__item').length * slider.slideWidth);
            slider.sliderTimer = setInterval(this.nextSlide, slider.sliderTime);
        },
        stopOnHover() {
            $('.visible').hover(function () {
                clearInterval(slider.sliderTimer);
            }, function () {
                slider.sliderTimer = setInterval(slider.nextSlide, slider.sliderTime);
            });
        }
    };


    slider.startSlider();

    slider.stopOnHover();
});
