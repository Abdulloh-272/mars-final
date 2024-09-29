const tel = "+998 97 777 77 57";
const pas = 12345;

const input_1 = document.querySelector("#i1");
const input_2 = document.querySelector("#i2");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  if (input_1.value == tel && pas == input_2.value) {
    window.location.href = "groups.html";
  } else {
    prompt("Parol yoki Teledon raqam hato");
  }
});




