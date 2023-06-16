const ROWS = 10;
const ROW_ITEMS = 15;
const containerBg = document.getElementById("container-bg");

for (let f = 0; f < ROWS; f++) {
  const box = createBox();
  for (let i = 0; i < ROW_ITEMS; i++) {
    createElement(box, "thumbnail")
  }
}

function createElement(box, classname) {
  const element = document.createElement("div");
  const id = getRandomInt(1, 128)
  element.style.backgroundImage = `URL(https://r2.avatarai.me/2023-04-10-02-55-45-ch_3MvANNHdpZPPmcVs1Q9kur6k-${id}.jpg)`;
  element.classList.add(classname);
  box.appendChild(element);
}

function createBox() {
  const box = document.createElement("div");
  box.classList.add("box");
  containerBg.appendChild(box);
  return box;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}