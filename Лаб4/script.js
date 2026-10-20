const BLUE = { background: "#1f3fbf", text: "#ffffff" };
const GREEN = { background: "#3ddc5a", text: "#0b2a10" };

function paint(element, scheme) {
  element.style.backgroundColor = scheme.background;
  element.style.color = scheme.text;
}

const education = document.getElementById("education");
let educationClicks = 0;

education.addEventListener("click", function () {
  paint(education, educationClicks % 2 === 0 ? BLUE : GREEN);
  educationClicks++;
});

const hobbyTitle = document.querySelector(".hobby-title");
let hobbyClicks = 0;

hobbyTitle.addEventListener("click", function () {
  paint(hobbyTitle, hobbyClicks % 2 === 0 ? GREEN : BLUE);
  hobbyClicks++;
});

const IMAGE_SRC = "img/rome-arches.jpg";
const START_WIDTH = 500;
const STEP = 50;
const MIN_WIDTH = 150;
const MAX_WIDTH = 850;

const imageBox = document.getElementById("image-box");
const addButton = document.getElementById("add-image");
const zoomInButton = document.getElementById("zoom-in");
const zoomOutButton = document.getElementById("zoom-out");
const removeButton = document.getElementById("remove-image");

let image = null;
let width = START_WIDTH;

function updateButtons() {
  addButton.disabled = image !== null;
  zoomInButton.disabled = image === null || width >= MAX_WIDTH;
  zoomOutButton.disabled = image === null || width <= MIN_WIDTH;
  removeButton.disabled = image === null;
}

function setWidth(value) {
  width = Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, value));
  image.width = width;
  updateButtons();
}

addButton.addEventListener("click", function () {
  image = document.createElement("img");
  image.src = IMAGE_SRC;
  image.alt = "Аркади Колізею зблизька";
  imageBox.appendChild(image);
  setWidth(START_WIDTH);
});

zoomInButton.addEventListener("click", function () {
  setWidth(width + STEP);
});

zoomOutButton.addEventListener("click", function () {
  setWidth(width - STEP);
});

removeButton.addEventListener("click", function () {
  image.remove();
  image = null;
  updateButtons();
});
