const form = document.querySelector(".contact-form");
const inputs = Array.from(form.querySelectorAll(".contact-field__input"));
const submitButton = form.querySelector(".contact-button");

const alphabeticCheck = /^[a-zA-ZÀ-ÿ\s]{3,21}$/;
const phoneCheck = /^[0-9\s\-\(\)]+$/; // Adjust regex as per your phone format
const emailCheck = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const messageCheck = /^[a-zA-ZÀ-ÿ\s]{21,420}$/;
const selectCheck = /^(?!\s*$).+/; // Matches any non-empty value

window.addEventListener("load", cleanForm);

inputs.forEach((input) => {
  input.addEventListener("input", validateInput);
});

function validateInput(event) {
  const input = event.target;
  const value = input.value;

  switch (input.id) {
    case "name":
      input.classList.toggle("is-valid", alphabeticCheck.test(value));
      input.classList.toggle("is-invalid", !alphabeticCheck.test(value));
      break;
    case "phone":
      input.classList.toggle("is-valid", phoneCheck.test(value));
      input.classList.toggle("is-invalid", !phoneCheck.test(value));
      break;
    case "email":
      input.classList.toggle("is-valid", emailCheck.test(value));
      input.classList.toggle("is-invalid", !emailCheck.test(value));
      break;
    case "subject":
      input.classList.toggle("is-valid", selectCheck.test(value));
      input.classList.toggle("is-invalid", !selectCheck.test(value));
      break;
    case "message":
      input.classList.toggle("is-valid", messageCheck.test(value));
      input.classList.toggle("is-invalid", !messageCheck.test(value));
      break;
  }

  validateForm();
}

function validateForm() {
  const allInputsValid = inputs.every((input) =>
    input.classList.contains("is-valid")
  );
  submitButton.disabled = !allInputsValid;
}

function cleanForm() {
  inputs.forEach((input) => {
    input.value = "";
    input.classList.remove("is-valid", "is-invalid");
  });
  submitButton.disabled = true;
}
