$(document).ready(function () {
   $(".slider").slick({
      arrows: false, // по дефолту включено стрелки навигацыи
      dots: true, // точки навигацыи
      adaptiveHeight: true, //меняет высоту автоматически под высоту фото
      slidesToShow: 3, //Количество отображаемых слайдов
      slidesToScroll: 1, //сколько слайдов пролистывать
      speed: 1800, //По умолчанию 350ms
      easing: "ease", //liner поумолчанию
      infinite: true, //По умолчанию true slick-disabled
      initialSlide: 0, //Стартовій слайдер по умолчанию 0

      // Autoplay
      autoplay: true, //Автопроигрывание по умвлчанию false
      autoplaySpeed: 1500,
      pauseOnFocu: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,

      // Touche
      draggable: true, //Поумолчанию true для ПК
      swipe: true, //Поумолчанию true для Mobile
      toucheThreshold: 5, //Момент срабатывания свайпа по умолчанию 5
      touchMove: true, //Поумолчанию true отключает перемешение слайдов

      centerMode: true, //Поумолчанию false основной слайд становится поцентру
      variableWidth: false, //Поумолчанию false убирает ширину слайда и заполняет по контенту для адаптива

      asNavFor: ".sliderbig", //Связывает два слайдера

      // appendArrows: $(".content"),      //Перемещает стрелки
      appendDots: $(".wrap"), //Перемещает точки

      responsive: [
         //Адаптивка
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 5,
            },
         },
         {
            breakpoint: 480,
            settings: {
            },
         },
      ],
      mobileFirst: true,
   });

   $(".bmw").click(function (event) {
      $(".slider").slick("goTo", 0);
   });

   $(".nisan").click(function (event) {
      $(".slider").slick("goTo", 1);р
   });

   $(".shevrolet").click(function (event) {
      $(".slider").slick("goTo", 2);
   });

   $(".toyota").click(function (event) {
      $(".slider").slick("goTo", 3); р
   });

   $(".wv").click(function (event) {
      $(".slider").slick("goTo", 4);
   });

   $(".sliderbig").slick({
      arrows: false,
      speed: 1000,
      infinite: true,
      asNavFor: ".slider", //Связывает два слайдера
   });
   
});
