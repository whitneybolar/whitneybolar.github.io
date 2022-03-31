// Everything OK?
console.log('OK');

// Open-overlay
$(document).ready(function(){
  $(".open-overlay").click(function(){
    $(".bar-top").animate({top: "15px"});
  });
  $(".open-overlay").click(function(){
    $(".bar-top").animate({top: "0px"});
  });
  $(".open-overlay").click(function(){
  $(".bar-bottom").animate({top: "0px"});
  });
  $(".open-overlay").click(function(){
    $(".bar-bottom").animate({top: "15px"});
  });
});


$('.open-overlay').click(function(){
 $("#nav_item_1").slideToggle({top: '13px'});
 $("#nav_item_2").slideToggle({top: '13px'});
 $("#nav_item_3").slideToggle({top: '13px'});
 }); 
 
 // drop down // add animation 
 // https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_read_more
 function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("send-button");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

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

/*
// Click Photography
$('#photography').click( function() {
  
  // Check Class
  checkClass();
  
  // Hide Other Stuff
  $('figure:not(.gallery-images-photography)').toggleClass('hide');
});

// Click digital design
$('#digital-design').click( function() {
  
  checkClass();
  $('figure:not(.gallery-images-d-d)').toggleClass('hide');

});

// Click writing samples
$('#writing-samples').click( function() {

  checkClass();
  $('figure:not(.gallery-images-s-w)').toggleClass('hide');
  
});

// Show All 
$('#all-subjects-link').click( function() {
  
  checkClass();
  
});

// about me svg 

$svg = $('#about-be-svg').drawsvg();

function animate() {
$svg.drawsvg('animate');  
}

animate();
*/

//footer copyright

// Get current year
var today = new Date();

// Store current year
var year = today.getFullYear();

// Check check 
console.log( today, year ); 


// Show current year
$('#copyright span').text( year );  

