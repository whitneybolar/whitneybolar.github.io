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

// gallery visibility

//$('#digital-design').click(() => {
//$('.gallery-digital-design').toggleClass('hidden');
//});

//$('#writing-samples').click(() => {
//$('.gallery-writing-samples').toggleClass('hidden');
//});

//$('#photography').click(() => {
//$('.gallery-photography').toggleClass('hidden');
//});

//$(document).ready(function() {
 // $("#writing-samples").click(function () {
 //  $(".gallery-digital-design").hide();
  // $(".gallery-photography").hide();
   //$(".gallery-writing-samples").show();
 // });
  
  //$(document).ready(function() {
  //$("#digital-design").click(function () {
   //$(".gallery-writing-samples").hide();
  // $(".gallery-photography").hide();
  // $(".gallery-digital-design").show();
 // });


  //$(document).ready(function() {
  //$("#photography").click(function () {
  // $(".gallery-writing-samples").hide();
   //$(".gallery-digital-design").hide();
  /// $(".gallery-photography").show();
 // });

// tabslet gallery


// light image stuff
  
$(document).ready(function() {
  $("#digital-design").click(function () {
   $(".whole-light-filler").show();
   $(".gallery-digital-design").hide();
  });
  $("#digital-design").click(function () {
   $(".gallery-digital-design").show();
   $(".whole-light-filler").hide();
  });
 });

$(document).ready(function() {
  $("#writing-samples").click(function () {
   $(".whole-light-filler").show();
   $(".gallery-writing-samples").hide();
  });
  $("#writing-samples").click(function () {
   $(".gallery-writing-samples").show();
   $(".whole-light-filler").hide();
  });
 });

$(document).ready(function() {
  $("#photography").click(function () {
   $(".whole-light-filler").show();
   $(".gallery-photography").hide();
  });
  $("#photography").click(function () {
   $(".gallery-photography").show();
   $(".whole-light-filler").hide();
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
$('#copyright').text( year ); 

