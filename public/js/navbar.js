// When the user scrolls the page, execute myFunction 
window.onscroll = function() {navbarScroll()};

// Get the header
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navbarScroll() {
  console.log(sticky);
  if (window.pageYOffset > sticky && window.pageYOffset < (56 + sticky)) {
    navbar.classList.add("sticky");
    navbar.classList.remove("navbar-transparent");
    navbar.classList.add("navbar-opaque");
  }
  else if(window.pageYOffset > (56 + sticky)){
    navbar.classList.add("sticky");
    navbar.classList.remove("navbar-opaque");
    navbar.classList.add("navbar-transparent");
  }
  else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("navbar-transparent");
    navbar.classList.add("navbar-opaque");
  }
}