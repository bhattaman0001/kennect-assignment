let isStopPressed = new Boolean(false);

async function bubble() {
  const arrayLength = document.querySelectorAll(".bar");
  for (let i = 0; i < arrayLength.length - 1; i++) {
    for (let j = 0; j < arrayLength.length - i - 1; j++) {
      if (isStopPressed == true) {
        return;
      }
      arrayLength[j].style.background = "cyan";
      arrayLength[j + 1].style.background = "cyan";
      if (
        parseInt(arrayLength[j].style.height) >
        parseInt(arrayLength[j + 1].style.height)
      ) {
        await delayTime(delay);
        swap(arrayLength[j], arrayLength[j + 1]);
      }
      arrayLength[j].style.background = "#e43f5a";
      arrayLength[j + 1].style.background = "#e43f5a";
    }
    arrayLength[arrayLength.length - 1 - i].style.background = "green";
  }
  arrayLength[0].style.background = "green";
}

const bubbleSortButton = document.querySelector(".bubbleSort");
bubbleSortButton.addEventListener("click", async function () {
  isStopPressed = false;
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  enableStopSortingBtn();
  await bubble();
  if (isStopPressed == true) {
    disableSpeedSlider();
  } else {
    enableSortingBtn();
    enableSizeSlider();
  }
  enableNewArrayBtn();
  disableStopSortingBtn();
});
