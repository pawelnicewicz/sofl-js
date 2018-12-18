/* global showLogout */

// When the user scrolls the page, execute navbarScroll 
window.onscroll = function() {navbarScroll()};

// When the user clicks the navbar expand button, execute navbarClick
var button = document.getElementsByClassName("navbar-toggler")[0];
button.onclick = function() {navbarClick()};
var loginIcon = document.getElementById("login-icon");
var logoutIcon = document.getElementById("logout-icon");

// Get the header
var navbar = document.getElementById("navbar");

if(showLogout){
  logoutIcon.classList.add("logout-icon-mobile");
}

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navbarScroll() {
  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;
  var navHeight = navbar.offsetHeight;
  if (window.pageYOffset > sticky && window.pageYOffset < (navHeight + sticky)) {
    navbar.classList.add("sticky");
    if(button.getAttribute("aria-expanded") == "false"){
      navbar.classList.remove("navbar-transparent");
      navbar.classList.add("navbar-opaque");
      loginIcon.classList.add("hidden");
      if(!showLogout) {
        logoutIcon.classList.add("hidden");
      }
    }
  }
  else if(window.pageYOffset > (navHeight + sticky)){
    navbar.classList.add("sticky");
    if(button.getAttribute("aria-expanded") == "false"){
      navbar.classList.remove("navbar-opaque");
      navbar.classList.add("navbar-transparent");
      loginIcon.classList.remove("hidden");
      if(showLogout) {
        logoutIcon.classList.remove("hidden");
      }
    }
  }
  else {
    navbar.classList.remove("sticky");
    if(button.getAttribute("aria-expanded") == "false"){
      navbar.classList.remove("navbar-transparent");
      navbar.classList.add("navbar-opaque");
      loginIcon.classList.add("hidden");
      if(showLogout) {
        logoutIcon.classList.add("hidden");
      }
    }
  }

}

function navbarClick() {
  var navbar = document.getElementById("navbar");
  if(button.getAttribute("aria-expanded") == "false"){
    navbar.classList.remove("navbar-transparent");
    navbar.classList.add("navbar-opaque");
  }
}
