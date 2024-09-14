// toggle menu
const navbar = document.querySelector("#navbar");
navbar.addEventListener("click", () => {
  navbar.style.display = "none";
});
const openMenu = document.querySelector("#open");
openMenu.addEventListener("click", () => {
  // navbar.classList.toggle("active")
  navbar.style.display = "block";
});
// image carousel click function and direction
const imgList = document.querySelector("#imgList");
const scrollLeft = document.querySelector("#scroll-left");
const scrollRight = document.querySelector("#scroll-right");
// scrollRight.style.background = "red";

// when a user click on the right move arrow, move the right side by 750px to right
scrollRight.addEventListener("click", () => {
  // moving the arrow postion
  imgList.scrollBy(750, 0);
  // imgList.scrollBy(750, 0).disabled;
});
// when a user clicks on the left arrow, mover the ul scroll to 750px to right
scrollLeft.addEventListener("click", () => {
  imgList.scrollBy(-750, 0);
});


// form info display
const formInfo = document.querySelector(".display-Info");
formInfo.addEventListener("click", () => {
  const formInfo = document.querySelector(".form-Info");
  setTimeout(() => {
    formInfo.style.display = "block";
  }, 5000);
});

