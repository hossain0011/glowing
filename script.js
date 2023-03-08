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














let mybutton = document.getElementById("upBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

window.addEventListener("scroll", reveal);
function reveal(){
      var reveals = document.querySelectorAll(".reveal");
  for(var i = 0; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;
    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add('active');
    }else{
      reveals[i].classList.remove('active')
    }
  }
}
