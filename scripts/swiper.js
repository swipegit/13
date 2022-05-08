const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    speed: 500,
    slidesPerGroup: 4,
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      768:{
        slidesPerView: 3,
        slidesPerGroup: 3,
      },

      769:{
        slidesPerView: 4,
        slidesPerGroup: 4,
      },

      595:{
        slidesPerView: 2,
      },
      
      425:{
        slidesPerView: 2,
        slidesPerGroup: 2,
      },

      375:{
        slidesPerView: 2,
        slidesPerGroup: 2,
      },

      320:{
        slidesPerView: 1,
        slidesPerGroup: 1,
      }
    }
  
});

const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 500,
  speed: 500,
  // slidesPerGroup: 1,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },

});

const swiper3 = new Swiper('.swiper3', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 50,
  speed: 500,
  freeMode: true,
  slidesPerView: 2.6,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next3',
    prevEl: '.swiper-button-prev3',
  },

  breakpoints: {
    1000: {
      slidesPerView: 2,
    },

    595: {
      slidesPerView: 2,
    },

    425: {
      slidesPerView: 1,
    },
    
    375: {
      slidesPerView: 1,
    },
    
    320: {
      slidesPerView: 1,
    } 
  }
});

const swiper4 = new Swiper('.swiper4', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 5,
  spaceBetween: 53,
  speed: 300,
  // freeMode: true,
  slidesPerGroup: 2,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next4',
    prevEl: '.swiper-button-prev4',
  },
  
  breakpoints: {
    1000: {
      freeMode: false,
      spaceBetween: 33,
    },
    
    1100: {
      freeMode: true,
    },

    768:{
      slidesPerView: 4,
    },

    595:{
      slidesPerView: 3,
      speed: 600,
    },

    425:{
      slidesPerGroup: 1,
      slidesPerView: 2,
      speed: 600,
      freeMode: true,
    },

    375:{
      slidesPerGroup: 1,
      slidesPerView: 2,
      speed: 600,
      freeMode: true,
    },

    320:{
      slidesPerGroup: 1,
      slidesPerView: 2,
      speed: 600,
      freeMode: true,
    },
    
  }
})
