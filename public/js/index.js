$(document).ready(function(){

  // color the people based on hovering
  var starting_color;
  $('.person').hover(function(){
    $this = $(this);
    starting_color = $this.css('color');
    $this.css({'color' : '#92C3D2'})
  }, function(){
    $this.css({'color' : starting_color});
  });



});