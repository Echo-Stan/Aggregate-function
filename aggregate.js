
let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");
let num3 = document.querySelector(".num3");
let result = document.querySelector(".title-up");

let mean_html = document.querySelector(".mean");
let range_html = document.querySelector(".range");
let median_html = document.querySelector(".median");
let max_html = document.querySelector(".max");
let min_html = document.querySelector(".min");

let btn = document.querySelector(".cal");
let clear = document.querySelector(".reset");

let numbersArray = [];

function clearData() {
  result.innerHTML = "";
  mean_html.innerHTML = "";
  range_html.innerHTML = "";
  median_html.innerHTML = "";
  max_html.innerHTML = "";
  min_html.innerHTML = "";
  num1.value = "";
  num2.value = "";
  num3.value = "";
}
function calculate() {
  result.innerHTML = "RESULT";
  numbersArray.push(num1.value, num2.value, num3.value);
  // max number
  max = Math.max(...numbersArray);
  max_html.innerHTML = "Max: " + max;
  // ------
  // range number
  min = Math.min(...numbersArray);
  min_html.innerHTML = "Min: " + min;
  range = max - min;
  range_html.innerHTML = "Range: " + range;

  // mid
  mid = numbersArray.find((e) => e > min && e < max);
  median_html.innerHTML = "Median: " + mid;
  if (mid === undefined) {
    median_html.innerHTML = "There is no median";
  }

  // mean
  mean_num =
    Number(numbersArray[0]) + Number(numbersArray[1]) + Number(numbersArray[2]);
  mean = mean_num / 3;

  mean_html.innerHTML = "Mean: " + parseInt(mean);
}

clear.addEventListener("click", (e) => {
  clearData();
  location.reload();
});
btn.addEventListener("click", (e) => {
  e.preventDefault();
  calculate();
});
