var slideIndex = 0;
var slideImg = [
  "/slider1.jpg",
  "/slider2.jpg",
  "/slider3.jpg",
  "/slider4.jpg",
  "/slider5.jpg"
]
var changeSlide = function() {
  
  document.querySelector(".slide-img").src =slideImg[slideIndex]
  slideIndex++
  if(slideIndex > slideImg.length-1) {
    slideIndex = 0
  }
  setTimeout(changeSlide, 4000)
}
function currentSile(n) {
  changeSlide(slideIndex = n)
}

changeSlide()