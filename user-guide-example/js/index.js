$(document).ready(function () {
  var
    numberOfSteps = $('.user-guide p').length,
    width = parseInt($('.user-guide p').css("width")),
    maxWidth = (numberOfSteps - 1) * width,
    stepID = 0;
    
  $("ul li[data-num='1']").addClass('active');
  $('.step span').html('Step 1');
  
  $('body').on('click','.user-guide__next', function(){
    var
      marginLeft = parseInt($('.slider-turn').css('margin-left')),
      mod = marginLeft % width;
      
    if (-marginLeft < maxWidth && mod === 0) {
      marginLeft -= width;
   
      $('.slider-turn').animate({
        'margin-left': marginLeft
      },300);
      $('ul li.active').addClass('true').removeClass('active');

      $('ul li[data-num="'+ ++stepID +'"]').addClass('active');
      $('.step span').html( 'Step ' + stepID );
    }
  });
  
  $('body').on('click','.user-guide__close',function(){
    $('.user-guide').animate({
      'opacity':0
    },600);
    $('.user-guide').animate({
      'top':-1200
    }, {
      duration: 2300,
      queue: false
    });
    $('.user-guide__open').animate({
      'top':'50%'
    });
  });
  
  $('body').on('click','.user-guide__open',function() {
    numberOfSteps = $('.user-guide p').length,
    width = parseInt($('.user-guide p').css("width")),
    maxWidth = (numberOfSteps - 1) * width;
    stepID = 0;
    
    $('ul li.active').removeClass('true').removeClass('active');
    $("ul li[data-num='1']").addClass('active');
    $('.step span').html('Step 1');
  
    $('.user-guide__open').animate({
      'top':-1000
    });
    
    $('.user-guide').animate({
      'opacity': 1
    },400);
    
    $('.user-guide').animate({
      'top':'50%'
    }, {
      duration: 800,
      queue: false
    });
    
  });

  scaleVideoContainer();
  
      initBannerVideoSize('.video-container .poster img');
      initBannerVideoSize('.video-container .filter');
      initBannerVideoSize('.video-container video');
  
      $(window).on('resize', function() {
          scaleVideoContainer();
          scaleBannerVideoSize('.video-container .poster img');
          scaleBannerVideoSize('.video-container .filter');
          scaleBannerVideoSize('.video-container video');
      });
  
  
  function scaleVideoContainer() {
  
      var height = $(window).height() + 5;
      var unitHeight = parseInt(height) + 'px';
      $('.homepage-hero-module').css('height',unitHeight);
  
  }
  
  function initBannerVideoSize(element){
  
      $(element).each(function(){
          $(this).data('height', $(this).height());
          $(this).data('width', $(this).width());
      });
  
      scaleBannerVideoSize(element);
  
  }
  
  function scaleBannerVideoSize(element){
  
      var windowWidth = $(window).width(),
      windowHeight = $(window).height() + 5,
      videoWidth,
      videoHeight;
  
      // console.log(windowHeight);
  
      $(element).each(function(){
          var videoAspectRatio = $(this).data('height')/$(this).data('width');
  
          $(this).width(windowWidth);
  
          if(windowWidth < 1000){
              videoHeight = windowHeight;
              videoWidth = videoHeight / videoAspectRatio;
              $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});
  
              $(this).width(videoWidth).height(videoHeight);
          }
  
          $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
  
      });
    }
});