/* Проверка поддержки webp, добавление класса webp или no-webp для HTML  */
export function isWebP() {
  function testWebP(callback) {

     var webP = new Image();
     webP.onload = webP.onerror = function () {
     callback(webP.height == 2);
     };
     webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
     }
     
     testWebP(function (support) {
     
     if (support == true) {
     document.querySelector('body').classList.add('webp');
     }else{
     document.querySelector('body').classList.add('no-webp');
     }
     });
}

const filter = document.querySelector('.catalogue__filter')
const filterBtn = document.querySelector('.mobile-filter-button')
const filterBtnArrow = document.querySelector('.mobile-filter-button-arrow')

filterBtn.addEventListener('click', onFilterClick);

function onFilterClick () {
  filter.classList.toggle('mobile-filter-hidden')
  filterBtnArrow.classList.toggle('arrow-rotated')
}

const mobileCategoriesBtn = document.querySelector(
    ".header-bottom__mobile-categoryBtn"
  );
  const mobileCategories = document.querySelector(".categories-mobile");
  const body = document.querySelector("body")
  
  mobileCategoriesBtn.addEventListener("click", onCategoriesClick);
  
  function onCategoriesClick(click) {
    mobileCategories.classList.toggle("show");
    body.classList.toggle("noScroll")
  }
  
  const goTopBtn = document.querySelector('.go-top-btn')
  
  goTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  })
  
//   import Splide from "@splidejs/splide";
  
  // functions.sliders();
  
  
  // import Splide from "@splidejs/splide";
  
  // var splide = new Splide("#slider_mobile1", {
  //   perPage: 1,
  //   speed: 500,
  //   mediaQuery: "min",
  //   arrows: false,
  //   pagination: true,
  //   // breakpoints: {
  //   //   768: {
  //   //     destroy: true,
  //   //   },
  //   // },
  // });
  
  // splide.mount();
  
  var splide = new Splide("#slider1", {
    perPage: 1,
    speed: 500,
    pagination: false,
    mediaQuery: "max",
    breakpoints: {
      768: {
        destroy: true,
      },
    },
  });
  
  splide.mount();

  var splide = new Splide("#goodsMobSlider1", {
    perPage: 1,
    speed: 500,
    mediaQuery: "min",
    arrows: true,
    pagination: false,
    breakpoints: {
      768: {
        destroy: true,
      },
    },
  });
  
  splide.mount();

  var splide = new Splide("#bestChoise1", {
    perPage: 1,
    speed: 500,
    // autoWidth: true,
    // mediaQuery: "max",
    arrows: true,
    pagination: false,
    // breakpoints: {
    //   768: {
    //     destroy: true,
    //   },
    // },
  });
  
  splide.mount();


  // var splide = new Splide("#slider2", {
  //   perPage: 6,
  //   speed: 500,
  //   // type   : 'loop',
  //   pagination: false,
  //   mediaQuery: "max",
  //   breakpoints: {
  //     768: {
  //       destroy: true,
  //     },
  //   },
  // });
  
  // splide.mount();
  
  // var splide = new Splide("#sliderSellers", {
  //   perPage: 8,
  //   perMove: 2,
  //   speed: 500,
  //   autoWidth: true,
  //   pagination: true,
  //   mediaQuery: "max",
  //   breakpoints: {
  //     768: {
  //       destroy: true,
  //     },
  //   },
  // });
  
  // splide.on("pagination:mounted", function (data) {
  //   // You can add your class to the UL element
  //   data.list.classList.add("splide__pagination--custom");
  
  //   // `items` contains all dot items
  //   data.items.forEach(function (item) {
  //     item.button.textContent = String(item.page + 1);
  //   });
  // });
  
  // splide.mount();
  
  // var splide = new Splide("#sliderSellersMob", {
  //   perPage: 1,
  //   perMove: 1,
  //   speed: 500,
  //   // autoWidth: true,
  //   pagination: true,
  //   // type: "loop",
  //   // mediaQuery: "min",
  //   // breakpoints: {
  //   //   768: {
  //   //     destroy: true,
  //   //   },
  //   // },
  // });
  
  // splide.on("pagination:mounted", function (data) {
  //   // You can add your class to the UL element
  //   data.list.classList.add("splide__pagination--custom");
  
  //   // `items` contains all dot items
  //   data.items.forEach(function (item) {
  //     item.button.textContent = String(item.page + 1);
  //   });
  // });
  
  // splide.mount();
  
  
  
  // var splide = new Splide("#slider4", {
  //   perPage: 2,
  //   speed: 500,
  //   pagination: false,
  //   mediaQuery: "max",
  //   breakpoints: {
  //     768: {
  //       destroy: true,
  //     },
  //   },
  // });
  
  // splide.mount();
  
  
  // var splide = new Splide("#sliderMobCategory", {
  
  //   perPage: 1,
  //   speed: 500,
  //   // type   : 'loop',
  //   pagination: true,
  //   mediaQuery: "min",
  //   breakpoints: {
  //     768: {
  //       destroy: true,
  //     },
  //   },
  // });
  
  // splide.mount();
  
  // var splide = new Splide("#goodsMobSlider4", {
  //   perPage: 1,
  //   speed: 500,
  //   mediaQuery: "min",
  //   arrows: true,
  //   pagination: false,
  //   breakpoints: {
  //     768: {
  //       destroy: true,
  //     },
  //   },
  // });
  
  // splide.mount();

  var splide = new Splide("#slider5", {
    perPage: 2,
    speed: 500,
    pagination: false,
    mediaQuery: "max",
    breakpoints: {
      768: {
        destroy: true,
      },
    },
  });
  
  splide.mount();

  var splide = new Splide("#goodsMobSlider5", {
    perPage: 1,
    speed: 500,
    mediaQuery: "min",
    arrows: true,
    pagination: false,
    breakpoints: {
      768: {
        destroy: true,
      },
    },
  });
  
  splide.mount();

  var splide = new Splide("#slider6", {
    perPage: 2,
    speed: 500,
    pagination: false,
    mediaQuery: "max",
    breakpoints: {
      768: {
        destroy: true,
      },
    },
  });
  
  splide.mount();

  var splide = new Splide("#goodsMobSlider6", {
    perPage: 1,
    speed: 500,
    mediaQuery: "min",
    arrows: true,
    pagination: false,
    breakpoints: {
      768: {
        destroy: true,
      },
    },
  });
  
  splide.mount();

  var splide = new Splide("#slider7", {
    perPage: 2,
    speed: 500,
    pagination: false,
    mediaQuery: "max",
    breakpoints: {
      768: {
        destroy: true,
      },
    },
  });
  
  splide.mount();

  var splide = new Splide("#goodsMobSlider7", {
    perPage: 1,
    speed: 500,
    mediaQuery: "min",
    arrows: true,
    pagination: false,
    breakpoints: {
      768: {
        destroy: true,
      },
    },
  });
  
  splide.mount();
  
  // var splide = new Splide("#leaderSellers", {
  //   perPage: 1,
  //   speed: 500,
  //   autoWidth: true,
  //   mediaQuery: "max",
  //   arrows: true,
  //   pagination: false,
  //   breakpoints: {
  //     768: {
  //       destroy: true,
  //     },
  //   },
  // });
  
  // splide.mount();
  

  
  var splide = new Splide("#bestChoise2", {
    perPage: 1,
    speed: 500,
    // autoWidth: true,
    // mediaQuery: "max",
    arrows: true,
    pagination: false,
    // breakpoints: {
    //   768: {
    //     destroy: true,
    //   },
    // },
  });
  
  splide.mount();
  
  // var splide = new Splide( '#main-carousel', {
  //   pagination: false,
  // } );
  
  // splide.mount();
  
//   function itemCard () {
    
//     if (document.location.pathname === "/current_item.html") {
//       document.addEventListener( 'DOMContentLoaded', function () {
//         new Splide( '#thumbnail-carousel', {
//           fixedWidth  : 100,
//         fixedHeight : 60,
//         gap         : 10,
//         rewind      : true,
//         pagination  : false,
//         isNavigation: true,
//         breakpoints : {
//           600: {
//             fixedWidth : 60,
//             fixedHeight: 44,
//           },
//         },
//         } ).mount();
//       } );
      
//       var splide = new Splide( '#main-carousel', {
//         pagination: false,
//         arrows: false,
//         pagination: true,
//       } );
      
//       var thumbnails = document.getElementsByClassName( 'thumbnail' );
//       var current;
      
//       for ( var i = 0; i < thumbnails.length; i++ ) {
//         initThumbnail( thumbnails[ i ], i );
//       }
      
//       function initThumbnail( thumbnail, index ) {
//         thumbnail.addEventListener( 'click', function () {
//           splide.go( index );
//         } );
//       }
      
//       splide.on( 'mounted move', function () {
//         var thumbnail = thumbnails[ splide.index ];
      
//         if ( thumbnail ) {
//           if ( current ) {
//             current.classList.remove( 'is-active' );
//           }
      
//           thumbnail.classList.add( 'is-active' );
//           current = thumbnail;
//         }
//       } );
      
//       splide.mount();
//     }
  
//     else return;
//   }
  
//   document.addEventListener( 'DOMContentLoaded', itemCard)
  
  
  // document.addEventListener( 'DOMContentLoaded', function () {
  //   new Splide( '#thumbnail-carousel', {
  // 		fixedWidth  : 100,
  //   fixedHeight : 60,
  //   gap         : 10,
  //   rewind      : true,
  //   pagination  : false,
  //   isNavigation: true,
  //   breakpoints : {
  //     600: {
  //       fixedWidth : 60,
  //       fixedHeight: 44,
  //     },
  //   },
  //   } ).mount();
  // } );
  
  // var splide = new Splide( '#main-carousel', {
  //   pagination: false,
  //   arrows: false,
  //   pagination: true,
  // } );
  
  // var thumbnails = document.getElementsByClassName( 'thumbnail' );
  // var current;
  
  // for ( var i = 0; i < thumbnails.length; i++ ) {
  //   initThumbnail( thumbnails[ i ], i );
  // }
  
  // function initThumbnail( thumbnail, index ) {
  //   thumbnail.addEventListener( 'click', function () {
  //     splide.go( index );
  //   } );
  // }
  
  // splide.on( 'mounted move', function () {
  //   var thumbnail = thumbnails[ splide.index ];
  
  //   if ( thumbnail ) {
  //     if ( current ) {
  //       current.classList.remove( 'is-active' );
  //     }
  
  //     thumbnail.classList.add( 'is-active' );
  //     current = thumbnail;
  //   }
  // } );
  
  // splide.mount();
  
//   const show1 = document.getElementById('show1')
//   const show2 = document.getElementById('show2')
//   const show3 = document.querySelector('#show3')
  
//   const spoller1 = document.querySelector('.spoller-1')
//   const spoller2 = document.querySelector('.spoller-2')
//   const spoller3 = document.querySelector('.spoller-3')
  
//   show1.addEventListener('click', onShowClick1)
//   show2.addEventListener('click', onShowClick2)
//   show3.addEventListener('click', onShowClick3)
  
  
//   function onShowClick1 () {
//     spoller1.classList.toggle('active');
//     show1.classList.toggle('showFullHidden')
//   }
  
//   function onShowClick2 () {
//     spoller2.classList.toggle('active');
//     show2.classList.toggle('showFullHidden')
//   }
  
//   function onShowClick3 () {
//     spoller3.classList.toggle('active');
//     show3.classList.toggle('showFullHidden')
//   }
  
//   const seller = document.querySelector('.seller-info');
//   const showMoreSeller = document.querySelector('#showInfoSeller');
//   const showMoreSellerBtn = document.querySelector('#showInfoSeller button');
//   const hiddenSellerInfo = document.querySelector('.seller-info__card-bottom')
//   showMoreSeller.addEventListener('click', showMoreSellerInfo);
//   function showMoreSellerInfo () {
//     hiddenSellerInfo.classList.toggle('activeSellerInfo')
//     seller.classList.toggle('activeSellerCard')
  
//     showMoreSellerBtn.textContent = showMoreSellerBtn.textContent === 'Больше' ? 'Меньше' : 'Больше';
//   }
  
  
//   var splide = new Splide("#otherGoodsCurrentItem", {
//     perPage: 1,
//     speed: 500,
//     pagination: false,
//     mediaQuery: "max",
//     breakpoints: {
//       768: {
//         destroy: true,
//       },
//     },
//   });
  
//   splide.mount();