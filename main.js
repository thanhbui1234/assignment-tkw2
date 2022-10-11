var menu = document.querySelector("#menu");
var icon_menu = document.querySelector("#icon_menu");
icon_menu.addEventListener("click", function () {
  menu.classList.toggle("invisible");
  console.log(menu);
});
