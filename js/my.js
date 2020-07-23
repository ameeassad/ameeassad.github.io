/* $(document).ready(function(){

  //$('.').on('mouseenter mouseleave click', function() 

  $('.trigger, .slider').hover(function() {
    var id = $(this).attr('id') 
    if (id.length == 2 ){
      var infoId = id + '-info';
    }
    else{ 
      var infoId = id;
    }

    $('#' + infoId).toggleClass('close');

  });

}) */

$(document).ready(function(){

  $('.trigger').on('mouseenter', function()  {

    closeAll();

    var id = $(this).attr('id');
    var infoId = id + '-info';
    
    $('#' + infoId).removeClass('close');

  });

  /* $('.trigger').click(function(){
    var id = $(this).attr('id');
    var infoId = id + '-info';
    $('#' + infoId).toggleClass('close');
  }) */

  function closeAll(){
    var sliders = $('.slider')
    sliders.each(function(){
      if (!$(this).hasClass("close")){
        $(this).addClass('close');
      }
    })
  }

  //if click outside slider -> add class close to all sliders
  $(document).mouseup(function(e) {
    var container = $(".slider");

    // if the target of the click isnt a trigger and isn't the container nor a descendant of the container
    if (!$('.trigger').is(e.target) && !container.is(e.target) && container.has(e.target).length === 0) {
      closeAll()
    }
  });
})