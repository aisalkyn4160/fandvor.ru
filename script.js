const header = document.querySelector(".header");
const burger = document.querySelector(".burger");


burger.addEventListener("click", () => {
    header.classList.toggle("mobile-header");
    if (header.classList.contains("mobile-header")) {
        document.body.classList.add("no-scroll");
    } else {
        document.body.classList.remove("no-scroll");
    }
})


let coll = document.getElementsByClassName("collapsible");


for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;

    if(this.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + "px";
    } else{
        content.style.maxHeight = null;
    }
  });
}

// ------------------------------swiper--------------------------------

const swiper = new Swiper(".banner-swiper", {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",  
        formatFractionCurrent: addZero,
        formatFractionTotal: addZero
      },
});



const partnerSwiper = new Swiper(".partners-swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",  
        formatFractionCurrent: addZero,
        formatFractionTotal: addZero
      },
    loop: true,
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 12,
        },
        768: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 4,
        },
      }
})

function addZero(num){
    return (num > 9) ? num : '0' + num;
  }