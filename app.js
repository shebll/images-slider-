let imgs = Array.from(document.querySelectorAll(".slider-container img"));
let slideNumber = document.querySelector(".slider-container .slider-number");
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
let bullet = document.querySelector("#bullets-ul");
bulletss = Array.from(document.querySelectorAll("#bullets-ul li"));
////////////////////////////////////////////////////////////////////////
bulletss.forEach((bullet) => {
  bullet.onclick = function () {
    firstImg = bullet.innerHTML;
    checker();
  };
});
////////////////////////////////////////////////////////////////////////
function nextSlide() {
  if (next.classList.contains("disable") == true) {
    return false;
  } else {
    firstImg++;
    checker();
    // console.log(firstImg);
  }
}
function prevSlide() {
  if (previous.classList.contains("disable") == true) {
    return false;
  } else {
    firstImg--;
    checker();
    // console.log(firstImg);
  }
}
function checker() {
  slideNumber.innerHTML = `slide #${firstImg} of ${imgsCount}`;
  imgs.forEach((img) => {
    img.classList.remove("active");
  });
  imgs[firstImg - 1].classList.add("active");
  bulletss.forEach((bullet) => {
    bullet.classList.remove("active");
  });
  bullet.children[firstImg - 1].classList.add("active");

  if (firstImg == 1) {
    previous.classList.add("disable");
  } else {
    previous.classList.remove("disable");
  }
  if (firstImg == imgsCount) {
    next.classList.add("disable");
  } else {
    next.classList.remove("disable");
  }
}
////////////////////////////////////////////////////////////////////////
checker();
