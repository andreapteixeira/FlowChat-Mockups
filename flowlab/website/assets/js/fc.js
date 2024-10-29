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

  // LAZY VIDEO
  var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

  if ("IntersectionObserver" in window) {
    var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(video) {
        if (video.isIntersecting) {
          for (var source in video.target.children) {
            var videoSource = video.target.children[source];
            if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
              videoSource.src = videoSource.dataset.src;
            }
          }

          video.target.load();
          video.target.classList.remove("lazy");
          lazyVideoObserver.unobserve(video.target);
        }
      });
    });

    lazyVideos.forEach(function(lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
  }

});
// DOMContentLoaded  end
