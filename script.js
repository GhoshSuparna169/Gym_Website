let toTopButton = document.querySelector('.to-top');


window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
};


toTopButton.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});



