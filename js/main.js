const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', 'Search');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if(window.scrollY > 500){
    //hide badge
    // badgeEl.style.display = 'none';
    //gasp.to(elements, time, option)
    gsap.to(badgeEl, 0.4, {
      display: 'none',
      opacity: 0
    });
  }
  else{
    //show badge
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, 0.4, {
      display: 'block',
      opacity: 1
    });
  }
}, 300));

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, //0.7 -> 1.4 -> 2.1 -> 2.7
    opacity: 1
  });
});

// new Swiper(arg, option)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  //  autoplay: true,
   autoplay:{
    delay: 4000
   },
   loop: true
});

new Swiper('.promotion .swiper-container', {
  // default
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 5000
  },
  loop: true,
  pagination:{
    el: '.promotion .swiper-pagination', //page number selector
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion){
    //hide
    promotionEl.classList.add('hide');
  }
  else{
    //show
    promotionEl.classList.remove('hide');
  }
});

function random(min, max){
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObj(selector, delay, size){
  // gsap.to(element, time, option);
  gsap.to(
    selector, 
    random(1.5, 2.5), 
    {
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay),
    }
  );
}

floatingObj('.floating1', 1, 15);
floatingObj('.floating2', 0.5, 15);
floatingObj('.floating3', 1.5, 20);