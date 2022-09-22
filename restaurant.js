var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
});



// const showOnPx = 100;
// const backToTopButton = document.querySelector(".bottomup");
// const scrollContainer = () => document.documentElement || document.body;
// document.addEventListener("scroll", () => {
//   if (scrollContainer().scrollTop > showOnPx) {
//     backToTopButton.classList.remove("hidden");
//   } else {
//     backToTopButton.classList.add("hidden");
//   }
// });


/*Navigation Class Toggle Script Starts Here */
function heroHeight(){
  let heroHeight = $(".main1").outerHeight()-50;
  var header = $(".navigation1");
  $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      if (scroll >= heroHeight) {
          header.removeClass('navigation1').addClass("navigation-toggle");
      } else {
          header.removeClass("navigation-toggle").addClass('navigation1');
      }
  });
};

heroHeight();

$(window).resize(function(){
  heroHeight();
});
/*Navigation Class Toggle Script Starts Here */
// $(document). ready(function(){ alert("Ready!"); });
