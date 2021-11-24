$('.feature').on('mouseenter mouseleave', function(){
  var x = $('.feature');
  for(var i=0; i<x.length; i++){
    $(this).toggleClass('active');
    
  }
});
$('.feature').on('mouseenter', function(){
  if($(this).hasClass('active') && $(this).index() == 0){
    $('.tab.0').toggleClass('active');
    
    $('.tab.1').removeClass('active');
    $('.tab.2').removeClass('active');
  }

  else if($(this).hasClass('active') && $(this).index() == 1){
    $('.tab.1').toggleClass('active');

    $('.tab.2').removeClass('active');
    $('.tab.0').removeClass('active');
  }

  else if($(this).hasClass('active') && $(this).index() == 2){
    $('.tab.2').toggleClass('active');

    $('.tab.1').removeClass('active');
    $('.tab.0').removeClass('active');
  } 
});





$('.aux').on('click', function(){
  if($(this).parent().is('.up')){
    $(this).closest('.arrow').removeClass('up');
    $(this).closest('.arrow').find('.hidden').css({'display':'none'});

 
  }else{
    $(this).closest('.arrow').addClass('up');
    $(this).closest('.arrow').find('.hidden').css({'display':'block'});
  }
});