import { validator } from "./data/validator.js";


function Main() {
  const input = document.getElementById('input');
  const button = document.getElementById('button');
  const button2 = document.getElementById('button2');
  const result = document.getElementById('result');

  button.addEventListener('click', () => {
    const validationMessage = validator(input.value);
    result.innerHTML = validationMessage;
  });

  button2.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

Main();
