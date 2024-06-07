const buttons = document.querySelectorAll(".button");
const overlays = document.querySelectorAll(".overlays");
const imageContainers = document.querySelectorAll(".imageContainer");

imageContainers.forEach((image, i) => {
  image.addEventListener("mouseover", () => {
    overlays[i].style.transition = "0.5s";
    overlays[i].style.bottom = "60px";
    buttons[i].style.transition = "0.5s";
    buttons[i].style.opacity = "1";
  });
});

imageContainers.forEach((image, i) => {
  image.addEventListener("mouseout", () => {
    overlays[i].style.transition = "0.5s";
    overlays[i].style.bottom = "30px";
    buttons[i].style.opacity = "0";
  });
});
