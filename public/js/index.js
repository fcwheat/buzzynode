$(document).ready(function(){

  // color the people based on hovering
  var starting_colors = [];
  var id;
  var people;
  var score;

  // on mousing over one of the people, the colors get
  // filled to that point
  $('.person').mouseover(function(){
    $this   = $(this);
    id      = parseInt($this.attr('id'), 10);
    people  = $this.parent().children();

    for (var i = 0; i < id + 1; i++) {
      starting_colors.push($(people[i]).css('color'));
      score = $(people[i]).data('score');
      $(people[i]).css({'color' : '#92C3D2'});
    }

    for (var i = id + 1; i < 5; i++) {
      starting_colors.push($(people[i]).css('color'));
       $(people[i]).css({'color' : '#d1d1d1'});
    }

    
   
  });

  // on mousing out the colors go back to how they started
  $('.person').mouseout(function(){
    for (var i = 0; i < 5; i++) {
      $(people[i]).css({'color' : starting_colors[i]});
    }
    starting_colors = [];
  });
});