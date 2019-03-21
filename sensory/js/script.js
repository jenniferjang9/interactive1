
// $('document').ready(function(){
//   $('body').click(function(){
//     $('body').toggleClass('colorful');  
//   });
// });

$(document).ready(function(){
  
  var scroll;

  
  $(window).scroll(function() {
    scroll = $(document).scrollTop();
    $('.shape-1, .shape-2, .shape-3, .shape-4, .shape-5, .shape-6, .shape-7, .shape-8, .shape-9, .shape-10').css('transform', 'scale('+scroll*.005+'');

    console.log(scroll);
  });
});