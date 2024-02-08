const form = document.querySelector(".form");
const input = document.querySelector(".email");
const message = document.querySelector(".alert");
const icon = document.querySelector(".error");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = input.value;
  if (email.trim() === "") {
    message.innerText = "Please enter your email!";
    message.classList.add("active");
    icon.classList.add("active");
    input.classList.add("border");
  } else if (!validateEmail(email)) {
    message.innerText = "Please provide a valid email!";
    message.classList.add("active");
    icon.classList.add("active");
    input.classList.add("border");
  } else {
    message.innerText = "";
    message.classList.remove("active");
    icon.classList.remove("active");
    input.classList.remove("border");
  }
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
