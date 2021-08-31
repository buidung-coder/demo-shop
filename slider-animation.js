var slideIndex = 0;
var changeSlide = function() {
  var slideImg = [
    "/slider.jpg",
    "/slider2.jpg",
    "/slider3.jpg",
    "/slider4.jpg",
    "/slider5.jpg"
  ]
  document.querySelector(".slide-img").src =slideImg[slideIndex]
  slideIndex++
  if(slideIndex > slideImg.length-1) {
    slideIndex = 0
  }
  setTimeout(changeSlide, 4000)

}

changeSlide()