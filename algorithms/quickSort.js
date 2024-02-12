async function partitionLomuto(arrayLength, l, r) {
  let i = l - 1;
  arrayLength[r].style.background = "cyan";
  for (let j = l; j <= r - 1; j++) {
    if (isStopPressed == true) {
      return;
    }
    arrayLength[j].style.background = "yellow";
    await delayTime(delay);
    if (isStopPressed == true) {
      return;
    }
    if (
      parseInt(arrayLength[j].style.height) <
      parseInt(arrayLength[r].style.height)
    ) {
      i++;
      swap(arrayLength[i], arrayLength[j]);
      arrayLength[i].style.background = "orange";
      if (i != j) arrayLength[j].style.background = "orange";
      await delayTime(delay);
    } else {
      arrayLength[j].style.background = "pink";
    }
  }
  i++;
  if (isStopPressed == true) {
    return;
  }
  await delayTime(delay);
  if (isStopPressed == true) {
    return;
  }
  swap(arrayLength[i], arrayLength[r]);
  arrayLength[r].style.background = "pink";
  arrayLength[i].style.background = "green";

  if (isStopPressed == true) {
    return;
  }
  await delayTime(delay);
  if (isStopPressed == true) {
    return;
  }
  for (let k = 0; k < arrayLength.length; k++) {
    if (arrayLength[k].style.background != "green")
      arrayLength[k].style.background = "#e43f5a";
  }

  return i;
}

async function quickSort(arrayLength, l, r) {
  if (l < r) {
    let pivot_index = await partitionLomuto(arrayLength, l, r);
    await quickSort(arrayLength, l, pivot_index - 1);
    await quickSort(arrayLength, pivot_index + 1, r);
  } else {
    if (l >= 0 && r >= 0 && l < arrayLength.length && r < arrayLength.length) {
      arrayLength[r].style.background = "green";
      arrayLength[l].style.background = "green";
    }
  }
}

const quickSortButton = document.querySelector(".quickSort");
quickSortButton.addEventListener("click", async function () {
  let arrayLength = document.querySelectorAll(".bar");
  let l = 0;
  let r = arrayLength.length - 1;
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  enableStopSortingBtn();
  await quickSort(arrayLength, l, r);
  if (isStopPressed == true) {
    disableSpeedSlider();
  } else {
    enableSortingBtn();
    enableSizeSlider();
  }
  enableNewArrayBtn();
  disableStopSortingBtn();
});
