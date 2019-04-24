$(document).ready(function () {
    var slider = {
        slideWidth: 300,  //Ширина одного слайда
        sliderTime: 2000,   //Интервал смены кадров
        nextSlide() {
            /*функция, сменяющая слайды каждую секунду*/
            var currentSlide = parseInt($('.slider').data('current'));  //определяем текущий слайд
            currentSlide++;  //увеличиваем его значение
            if (currentSlide >= $('.slider__item').length) { //если слайд последний
                currentSlide = 0; // перематываем к началу
            }

            // передвигаем список слайдов
            $('.slider').animate({left: -currentSlide * slider.slideWidth}, 300)
            $('.slider').data('current', currentSlide); // сохраняем значение текущего слайда
        },
        startSlider() {
            /*Устанавливаем ширину списка
            *равную произведению ширины одного слайда на общее кол-во слайдов
            *чтобы он вытянулся в одну строку*/
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

    // Вызываем метод старта слайда
    slider.startSlider();
    // Вызываем метод паузы слайда
    slider.stopOnHover();
});
