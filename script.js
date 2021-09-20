////////////menu///////////
const iconMenu = document.querySelector('.hamburger-menu');
  if(iconMenu) {
    const menuBody = document.querySelector('.menu-body');
    iconMenu.addEventListener('click', function(e){
      document.body.classList.toggle('lock');
      iconMenu.classList.toggle('active');
      menuBody.classList.toggle('active');
    });
  }

  $(document).ready(function () { 
    $('.slider-items').slick({
      dots: false,
      slidesToShow: 3,
      prevArrow: "<img src='assets/icons/arrow-left.svg' class='prev' alt='1'>",
      nextArrow: "<img src='assets/icons/arrow-right.svg' class='next' alt='2'>",
      infinite: false,
      // speed: 300,
      // slidesToShow: 3,
      // slidesToScroll: 3,
      // arrows: false,
      // autoplay: true
    });
     
    });