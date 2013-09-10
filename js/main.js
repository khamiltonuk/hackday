console.log('So you wanna see my code');
var quotes = Array(
  '"Mistakes are the portals of discovery." - James Joyce',
  '"Even if you fall on your face, you&#39;re still moving forward." - Victor Kiam',
  '"Failure is not an option. Everyone has to succeed." - Arnold Schwarzenegger ',
  '"A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing." - George Bernard Shaw'),
  quote = quotes[Math.floor(Math.random()*quotes.length)];

function cycleImages(){
  $('.fadein').each(function(){
      var $active = $(this).find('.active');
      var $next = ($(this).find('.active').next().length > 0) ? $(this).find('.active').next() : $(this).find('img:first');
      $next.css('z-index',2);//move the next image up the pile
      $active.fadeOut(1500,function(){//fade out the top image
          $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
          $next.css('z-index',3).addClass('active');//make the next image the top one
      });
  });
};  


$(document).ready(function() {
  $('#quote').html(quote).fadeIn();
  $('img.active').load(function(){
    var height =  $('.active').height();
    if (height > 847) {
      $('.content').css({top : (height - 200)})
    }
  });

  $('.nav-toggle').click(function () {
      var collapse_content_selector = $(this).attr('href'),
          toggle_switch = $(this);
      
      $(collapse_content_selector).toggle(function () {
          if ($(this).css('display') == 'none') {
              toggle_switch.html('Read more');
          } else {
              toggle_switch.html('Hide');
          }
      });
  });
  
  // run every 7s
  setInterval(function() {
    cycleImages();    
  }, 3000);
 
  header = $('.centerwrap').height();

  $(window).scroll(function () {
    var scrollOffset = $(this).scrollTop();
    if (scrollOffset > 200) {
      $('.go-top').fadeIn(200);
    } else {
      $('.go-top').fadeOut(200);
    }
  });

  // Animate the scroll to top
  $('.go-top').click(function(event) {
    event.preventDefault();
    
    $('html, body').animate({scrollTop: 0}, 300 , 'swing');
  })
  });