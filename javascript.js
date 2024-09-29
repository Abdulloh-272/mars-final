btn2 = document.querySelector(".btn2");
btn1 = document.querySelector(".btn1");
h4 = document.querySelector(".h4");
btn1.addEventListener("click", () => {
  h4.textContent = +1;
});
btn2.addEventListener("click", () => {
  h4.textContent = -2;
});
document.getElementById("ref").onclick = function () {
  location.reload();
};
