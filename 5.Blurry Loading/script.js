const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");
const scale = (num, in_max, in_min, out_max, out_min) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
let load = 0;
let int = setInterval(blurring, 30);
function blurring() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 100, 0, 0, 1);
  bg.style.filter = `blur(${scale(load, 100, 0, 0, 20)}px)`;
}
