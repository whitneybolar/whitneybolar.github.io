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


  