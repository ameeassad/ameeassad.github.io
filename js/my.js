$(document).ready(function(){

  //$('.').on('mouseenter mouseleave click', function() 

  $('.trigger, .slider').hover(function() {
    var id = $(this).attr('id') 
    if (id == '01' || id == '01-info'){
      $('#01-info').toggleClass('close');
    } else if (id == '02' || id == '02-info'){
      $('#02-info').toggleClass('close');
    } else if (id == '03' || id == '03-info'){
      $('#03-info').toggleClass('close');
    } else if (id == '04' || id == '04-info'){
      $('#04-info').toggleClass('close');
    }
    //$('.slider').toggleClass('close');
  });



  $('.trigger').on('mouseenter', function() {
    var id = $(this).attr('id') 
    if (id == '01'){
      $('#01-info').removeClass('clicked');
    } else if (id == '02'){
      $('#02-info').removeClass('clicked');
    } else if (id == '03'){
      $('#03-info').removeClass('clicked');
    } else if (id == '04'){
      $('#04-info').removeClass('clicked');
    }
    $('.slider').toggleClass('close');
  });

  //are there any triggers clicked on already?
  //if not, then remove the close class for this trigger's slider
  //if yes, do nothing

  //


})