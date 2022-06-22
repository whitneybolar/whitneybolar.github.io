// Everything OK?
console.log('OK');

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
var today = new Date();

// Store current year
var year = today.getFullYear();

// Check check 
console.log( today, year ); 


// Show current year
$('#copyright span').text( year );  

