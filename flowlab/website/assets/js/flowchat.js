

document.addEventListener("DOMContentLoaded", function(){

  // FIXED MENU
  window.addEventListener('scroll', function() {
      var WIDTH_LIMIT = 992;
      var windowWidth = window.innerWidth;
      if (window.scrollY > 200 && windowWidth >= WIDTH_LIMIT) {
        document.getElementById('header').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('#header').offsetHeight;
        document.body.style.paddingTop = '160px';
      } else {
        document.getElementById('header').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });

}); 
// DOMContentLoaded  end

