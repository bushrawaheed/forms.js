function clickme() {
  let clickme = document.querySelector("#special-button");
  alert("Hooray!");
}
let clickbutton = document.querySelector("button");
clickbutton.addEventListener("click", clickme);

function submit() {
  let submitButton = document.querySelector("#password-input");
  console.log(submitButton.value);
  if (submitButton.value) {
    alert(`The value of the password is ${submitButton.value}...`);
  } else {
    alert(`Please enter your password🤔`);
  }
}
let signUp = document.querySelector("#password-form");
signUp.addEventListener("submit", submit);

function isEmail() {
  let isEmail = document.querySelector("#email-input");
  console.log(isEmail.value);
  if (isEmail.value) {
    alert(`Your Email address is ${isEmail.value}`);
  } else {
    alert(`Kindly,enter your E-mail address`);
  }
}
let enterEmail = document.querySelector(`#signup-form`);
enterEmail.addEventListener("submit", isEmail);

function userName() {
  let userName = document.querySelector("#username-input");
  console.log(userName.value);
  if (userName.value) {
    alert(`Hello ${userName.value}`);
  } else {
    alert(`Please enter your name🤔`);
  }
}
let Name = document.querySelector("#signup-form");
Name.addEventListener("submit", userName);
