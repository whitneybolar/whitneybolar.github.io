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

// menu animaton 
// https://codepen.io/alvarotrigo/pen/oNGzoYd
function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

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

