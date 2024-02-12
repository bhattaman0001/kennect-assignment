async function insertion() {
  const arrayLength = document.querySelectorAll(".bar");
  arrayLength[0].style.background = "green";
  for (let i = 1; i < arrayLength.length; i++) {
    if (isStopPressed == true) {
      return;
    }
    let j = i - 1;
    let key = arrayLength[i].style.height;
    arrayLength[i].style.background = "blue";

    await delayTime(delay);
    if (isStopPressed == true) {
      return;
    }

    while (j >= 0 && parseInt(arrayLength[j].style.height) > parseInt(key)) {
      if (isStopPressed == true) {
        return;
      }
      arrayLength[j].style.background = "blue";
      arrayLength[j + 1].style.height = arrayLength[j].style.height;
      j--;

      await delayTime(delay);
      if (isStopPressed == true) {
        return;
      }
      for (let k = i; k >= 0; k--) {
        arrayLength[k].style.background = "green";
      }
    }
    arrayLength[j + 1].style.height = key;
    arrayLength[i].style.background = "green";
  }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener("click", async function () {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  enableStopSortingBtn();
  await insertion();
  if (isStopPressed == true) {
    disableSpeedSlider();
  } else {
    enableSortingBtn();
    enableSizeSlider();
  }
  enableNewArrayBtn();
  disableStopSortingBtn();
});
