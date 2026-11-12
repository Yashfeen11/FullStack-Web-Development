function generateElement() {
  return Math.floor(Math.random() * 100) + 1;
}

function generateArray() {
  let arr = Array(5).fill(0);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = generateElement();
  }
  return arr;
}

function generateContainer() {
  return document.createElement("div");
}

function fillArrContainer(htmlElement, arr) {
  let divElement = "";
  for (let i = 0; i < arr.length; i++) {
    divElement += `<span>${arr[i]}</span>`;
  }
  htmlElement.innerHTML = divElement;
}

function isOrdered(n1, n2) {
  return n1 <= n2;
}

function swapElements(arr, index) {
  if (!isOrdered(arr[index], arr[index + 1])) {
    let temp = arr[index];
    arr[index] = arr[index + 1];
    arr[index + 1] = temp;
  }
  return arr;
}

function highlightCurrentEls(htmlElement, index) {
  htmlElement.children[index].style.border = "2px dashed red";
  htmlElement.children[index + 1].style.border = "2px dashed red";
}

const generateBtn = document.getElementById("generate-btn");
const sortBtn = document.getElementById("sort-btn");
const startingArr = document.getElementById("starting-array");
const arrayContainer = document.getElementById("array-container");

generateBtn.addEventListener("click", () => {
  // Remove all generated step divs except #starting-array
  Array.from(arrayContainer.children).forEach((child) => {
    if (child !== startingArr) {
      child.remove();
    }
  });

  const arr = generateArray();
  fillArrContainer(startingArr, arr);
});

sortBtn.addEventListener("click", () => {
  // Clear any previous sort steps while keeping #starting-array intact
  Array.from(arrayContainer.children).forEach((child) => {
    if (child !== startingArr) {
      child.remove();
    }
  });

  // Reset borders on #starting-array spans before running
  Array.from(startingArr.children).forEach((span) => {
    span.style.border = "";
  });

  let arr = Array.from(startingArr.children).map((span) =>
    Number(span.textContent)
  );

  // Use a separate variable so startingArr is never overwritten
  let currentStepDiv = startingArr;

  for (let i = 0; i < arr.length; i++) {
    let swapped = false;

    for (let j = 0; j < arr.length - 1; j++) {
      // Create a new div for every comparison after the very first one (i=0, j=0)
      if (!(i === 0 && j === 0)) {
        currentStepDiv = generateContainer();
        fillArrContainer(currentStepDiv, arr);
        arrayContainer.appendChild(currentStepDiv);
      }

      // Highlight the pair being compared in the current step
      highlightCurrentEls(currentStepDiv, j);

      // Swap if out of order and track if any swap happened in this pass
      if (!isOrdered(arr[j], arr[j + 1])) {
        swapElements(arr, j);
        swapped = true;
      }
    }

    // Stop early if a full pass of 4 comparisons made no swaps
    if (!swapped) {
      break;
    }
  }

  // Append the final sorted state without highlights
  const sortedDiv = generateContainer();
  fillArrContainer(sortedDiv, arr);
  arrayContainer.appendChild(sortedDiv);
});