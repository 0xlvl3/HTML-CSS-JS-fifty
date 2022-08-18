"use strict";

/**
 * elements
 */
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numberEl = document.getElementById("numbers");
const symbolEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

/**
 * On click of the clipboard we will copy generated password to clipboard
 */
clipboardEl.addEventListener("click", (e) => {
  //we create a textarea element
  const textarea = document.createElement("textarea");
  //take the result and place in password variable
  const password = resultEl.innerText;

  //guard
  if (!password) return;

  //we make the textarea value the new generated password,
  textarea.value = password;
  //take textarea and place it in the body
  document.body.appendChild(textarea);
  //select everything in text area
  textarea.select();
  //copy whatever is selected
  document.execCommand("copy");
  //remove textarea
  textarea.remove();
  alert(`Password has been copied to the clipboard`);
});

generateEl.addEventListener("click", (e) => {
  const length = +lengthEl.value;

  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symbolEl.checked;

  resultEl.innerText = generatePassword(
    hasLower,
    hasNumber,
    hasSymbol,
    hasUpper,
    length
  );
});

/**
 *
 * @param {function} lower
 * @param {function} upper
 * @param {function} number
 * @param {function} symbol
 * @param {num} length
 * @returns will return the final password
 */
function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = ``;
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  //guard
  if (typesCount === 0) return ``;

  //loop and += selected options into a string
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      //MAKE THIS RANDOM?
      const funcName = Object.keys(type)[0];

      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}

/**
 * Object we will iterate over
 */
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

/**
 *
 * @returns random lowercase letter using String.fromCharCode UTF-16 code
 */
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

/**
 *
 * @returns random uppercase letter using String.fromCharCode UTF-16 code
 */
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

/**
 *
 * @returns random number using String.fromCharCode UTF-16 code
 */
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

/**
 *
 * @returns random symbol from specified symbols
 */
function getRandomSymbol() {
  const symbols = `!@#$%^&*()[]{}=<>/,.'`;
  return symbols[Math.floor(Math.random() * symbols.length)];
}
