function openNav() {
    document.getElementById("hiddenBox").style.left = "0";
 
   
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("hiddenBox").style.left= "-300px";

   
  }









  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".sticky").style.top = "0";
    } else {
      document.querySelector(".sticky").style.top = "-60px";
    }
    prevScrollpos = currentScrollPos;
  }











  window.onscroll = function() {myFunction()};

var navbar = document.getElementById("fixedMenu");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}