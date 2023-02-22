let imgs = Array.from(document.querySelectorAll(".slider-container img"));
let slideNumber = document.querySelector(".slider-container .slider-number ");
let next = document.querySelector(".next ");
let previous = document.querySelector(".prev ");
let imgsCount = imgs.length;
let firstImg = 1;

/////////////////////////////////////////////////////////////////////////
next.onclick = nextSlide;
previous.onclick = prevSlide;
///////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
function nextSlide() {
  console.log("next");
}
function prevSlide() {
  console.log("prev");
}
////////////////////////////////////////////////////////////////////////
