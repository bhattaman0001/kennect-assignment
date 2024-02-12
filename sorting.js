function swap(el1, el2) {
  let temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;
}

function disableSortingBtn() {
  document.querySelector(".bubbleSort").disabled = true;
  document.querySelector(".insertionSort").disabled = true;
  document.querySelector(".mergeSort").disabled = true;
  document.querySelector(".quickSort").disabled = true;
  document.querySelector(".selectionSort").disabled = true;
  document.querySelector(".heapSort").disabled = true;
}

function enableSortingBtn() {
  document.querySelector(".bubbleSort").disabled = false;
  document.querySelector(".insertionSort").disabled = false;
  document.querySelector(".mergeSort").disabled = false;
  document.querySelector(".quickSort").disabled = false;
  document.querySelector(".selectionSort").disabled = false;
  document.querySelector(".heapSort").disabled = false;
}

function disableSizeSlider() {
  document.querySelector("#size_input").disabled = true;
}

function disableSpeedSlider() {
  document.querySelector("#speed_input").disabled = true;
}

function enableSpeedSlider() {
  document.querySelector("#speed_input").disabled = false;
}

function enableSizeSlider() {
  document.querySelector("#size_input").disabled = false;
}

function disableNewArrayBtn() {
  document.querySelector(".new").disabled = true;
}

function enableNewArrayBtn() {
  document.querySelector(".new").disabled = false;
}

function enableStopSortingBtn() {
  document.querySelector(".stop").disabled = false;
}

function disableStopSortingBtn() {
  document.querySelector(".stop").disabled = true;
}

function delayTime(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}

let arraySize = document.querySelector("#size_input");

arraySize.addEventListener("input", function () {
  console.log(arraySize.value, typeof arraySize.value);
  createNewArray(parseInt(arraySize.value));
});

let delay = 260;

let delayElement = document.querySelector("#speed_input");

delayElement.addEventListener("input", function () {
  console.log(delayElement.value, typeof delayElement.value);
  delay = 320 - parseInt(delayElement.value);
});

let barArray = [];

createNewArray();

function createNewArray(noOfBars = 60) {
  deleteChild();

  barArray = [];
  for (let i = 0; i < noOfBars; i++) {
    barArray.push(Math.floor(Math.random() * 251));
  }
  console.log(barArray);

  const bars = document.querySelector("#sorting");

  for (let i = 0; i < noOfBars; i++) {
    const bar = document.createElement("div");
    bar.style.height = `${barArray[i] * 2}px`;
    bar.classList.add("bar");
    bar.classList.add("flex-item");
    bar.classList.add(`barNo${i}`);
    bars.appendChild(bar);
  }
}

function deleteChild() {
  const bar = document.querySelector("#sorting");
  bar.innerHTML = "";
}
const newArrayButton = document.querySelector(".new");
newArrayButton.addEventListener("click", function () {
  isStopPressed = false;
  enableSpeedSlider();
  console.log("From newArray " + arraySize.value);
  console.log("From newArray " + delay);
  enableSortingBtn();
  enableSizeSlider();
  createNewArray(arraySize.value);
});

const stopSortingButton = document.querySelector(".stop");
stopSortingButton.addEventListener("click", function () {
  disableSortingBtn();
  disableSizeSlider();
  isStopPressed = true;
});

function randomizeArray() {
  isStopPressed = false;
  enableSpeedSlider();
  enableSortingBtn();
  enableSizeSlider();
  createNewArray(arraySize.value);
}

const randomizeButton = document.querySelector(".randomize");
randomizeButton.addEventListener("click", randomizeArray);

const widthInput = document.querySelector("#width_input");
const heightInput = document.querySelector("#height_input");

function changeCanvasSize() {
  const sortingDiv = document.querySelector("#sorting");
  const widthInput = document.querySelector("#width_input");
  const heightInput = document.querySelector("#height_input");

  const widthValue = `${widthInput.value}px`;
  const heightValue = `${heightInput.value}px`;

  sortingDiv.style.width = widthValue;
  sortingDiv.style.height = heightValue;

  const bars = document.querySelectorAll(".bar");
  bars.forEach((bar) => {
    bar.style.width = `${widthInput.value / barArray.length}px`;
    bar.style.height = `${heightInput.value}px`;
  });
}

const changeSizeButton = document.querySelector(".changeSize");
changeSizeButton.addEventListener("click", changeCanvasSize);

function bubbleSortStep() {}

function skipBack() {
  resetSorting();
}

function stepForward() {}

function skipForward() {}

function resetSorting() {
  clearInterval(sortingInterval);
  sortingInterval = null;
  enableSortingBtn();
  enableSizeSlider();
  enableSpeedSlider();
  enableNewArrayBtn();
  enableStopSortingBtn();
}

document
  .querySelector(".startPause")
  .addEventListener("click", startPauseSorting);
document.querySelector(".skipBack").addEventListener("click", skipBack);
document.querySelector(".stepForward").addEventListener("click", stepForward);
document.querySelector(".skipForward").addEventListener("click", skipForward);
