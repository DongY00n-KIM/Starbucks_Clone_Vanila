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

