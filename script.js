// creating object to store acceleration due to gravity for the planets
const gravity = {
  Mercury: 3.59,
  Venus: 8.87,
  Earth: 9.81,
  Mars: 3.77,
  Jupiter: 25.95,
  Saturn: 11.08,
  Uranus: 10.67,
  Neptune: 14.07,
};

// targeting the form
const form = document.forms[0];
form.addEventListener("submit", e => {
  // prevent default form submit action
  e.preventDefault();
  // getting input field
  const input = document.getElementById("input-field");
  // getting select tag
  const select = document.getElementsByTagName("select")[0];
  // getting container
  const container = document.getElementById("container");
  // updating bg image on submit
  container.style["background-image"] =
    select.value !== "Saturn"
      ? `url(${select.value}.jpg)`
      : `url(${select.value}.png)`;
  // calculating and displaying the weight
  container.dataset.weight = `${(
    Number(input.value) * gravity[select.value]
  ).toFixed(2)}N`;
});
