// Everything OK?
console.log('OK');

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
/*function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}*/
// Used to toggle the menu on small screens when clicking on the menu button
/*function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        //x.className = x.className.replace(" ", "");
    }
}*/

/*const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)

function menuOnClick() {
  document.getElementById("nav").classList("icon");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}*/

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// menu animaton 
// https://codepen.io/alvarotrigo/pen/oNGzoYd
/*function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}*/

// read more read less slide 
// Author: M. Ferguson
// https://stackoverflow.com/questions/48646853/add-simple-slide-down-animation-to-read-more-text-reveal
$( "#send-button" ).click(function() {
  $( "#more" ).slideToggle( "fast" );
      var $this = $(this);
        $this.toggleClass("open");

        if ($this.hasClass("open")) {
            $this.html("Read Less");
        } else {
            $this.html("Read more");
        }
});

 // gallery filter 

 function checkClass() {
  // Remove Existing Hide 
  if ($('figure').hasClass('hide')) {
    $('figure').removeClass('hide');
  }

}

// light gallery 

$(document).ready(function() {
  $('.lightgallery').lightGallery({
    thumbnail: false, 
    share: false,
    pager: false
  });
});

//footer copyright

// Get current year
/*var today = new Date();

// Store current year
var year = today.getFullYear();

// Check check 
console.log( today, year ); 


// Show current year
$('#copyright span').text( year );  */


/* 
    Extenal code sources 
    https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_parallax&stacked=h
    https://codepen.io/alvarotrigo/pen/QWqKOdb 
    https://dev.to/devggaurav/let-s-build-a-responsive-navbar-and-hamburger-menu-using-html-css-and-javascript-4gci */
