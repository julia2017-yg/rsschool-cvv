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
      prevArrow: "<img src='assets/icons/arrow-left.svg' class='prev' alt='1'>",
      nextArrow: "<img src='assets/icons/arrow-right.svg' class='next' alt='2'>",
      slidesToShow: 3,
                      slidesToScroll: 1,
                      arrows: true,
                      autoplay: true,
                      autoplaySpeed: 2000,
                      responsive: [
                            {
                              breakpoint: 1200,
                              settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                              }
                            },
                            {
                              breakpoint: 1008,
                              settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                              }
                            },

                          ]
    });
     
    });