async function selection() {
  const arrayLength = document.querySelectorAll(".bar");
  for (let i = 0; i < arrayLength.length; i++) {
    if (isStopPressed == true) {
      return;
    }
    let min_index = i;
    arrayLength[i].style.background = "lightgreen";
    for (let j = i + 1; j < arrayLength.length; j++) {
      if (isStopPressed == true) {
        return;
      }
      arrayLength[j].style.background = "cyan";

      await delayTime(delay);
      if (isStopPressed == true) {
        return;
      }
      if (
        parseInt(arrayLength[j].style.height) <
        parseInt(arrayLength[min_index].style.height)
      ) {
        if (min_index !== i) {
          arrayLength[min_index].style.background = "#e43f5a";
        }
        min_index = j;
      } else {
        arrayLength[j].style.background = "#e43f5a";
      }
    }
    await delayTime(delay);
    if (isStopPressed == true) {
      return;
    }
    swap(arrayLength[min_index], arrayLength[i]);
    arrayLength[min_index].style.background = "#e43f5a";
    arrayLength[i].style.background = "green";
  }
}

const selectionSortButton = document.querySelector(".selectionSort");
selectionSortButton.addEventListener("click", async function () {
  isStopPressed = false;
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  enableStopSortingBtn();
  await selection();
  if (isStopPressed == true) {
    disableSpeedSlider();
  } else {
    enableSortingBtn();
    enableSizeSlider();
  }
  enableNewArrayBtn();
  disableStopSortingBtn();
});
