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
let bullets = document.createElement("ul");
bullets.setAttribute("id", "bullets-ul");
for (let i = 1; i <= imgsCount; i++) {
  let liTag = document.createElement("li");
  liTag.setAttribute("data-index", i);
  liTag.appendChild(document.createTextNode(i));
  bullets.appendChild(liTag);
}
document.querySelector(".indicators").appendChild(bullets);
////////////////////////////////////////////////////////////////////////
function nextSlide() {
  console.log("next");
}
function prevSlide() {
  console.log("prev");
}
////////////////////////////////////////////////////////////////////////
