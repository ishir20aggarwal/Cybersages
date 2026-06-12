var slideIndex = 1;
  showDivs(slideIndex);
  var autoSlideInterval; // Store the interval ID in a variable

  // Call plusDivs function every 4 seconds
  autoSlideInterval = setInterval(function () {
    plusDivs(1);
  }, 4000);

  function plusDivs(n) {
    showDivs((slideIndex += n));
  }

  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
  }

  function pauseAutoSlide() {
    // Clear the auto slide interval
    clearInterval(autoSlideInterval);
  }

  function resumeAutoSlide() {
    // Restart the auto slide
    autoSlideInterval = setInterval(function () {
      plusDivs(1);
    }, 4000);
  }