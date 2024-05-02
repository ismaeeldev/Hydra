let Mobile_menu_Button = document.getElementById("clickmobile");
let Mobile_menu = document.getElementById("mobile_menu_hide");

Mobile_menu_Button.addEventListener("click", function () {
  if (Mobile_menu.style.display === "none" || Mobile_menu.style.display === "") {
    Mobile_menu.style.display = "block";
  }
  else {
    Mobile_menu.style.display = "none";
  }
});




