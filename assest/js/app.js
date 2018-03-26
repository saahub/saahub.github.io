    $(document).ready(function() {
   if( ! $('#myCanvas').tagcanvas({
     textColour : '#1ab99f',
     outlineThickness : 0.5,
     outlineColour : '#1ab99f',
     maxSpeed : 0.06,
     depth : 0.8,
     freezeActive:true,
      freezeDecel:true,
      shuffleTags:true,
                shape:'sphere',
                fadeIn:3000,
                initial: [0.3,-0.1],
   })) {
     // TagCanvas failed to load
     $('#myCanvasContainer').hide();
   }
    
    $('.button-collapse').sideNav();

    $('.carousel').carousel();
    setInterval(function() {
    $('.carousel').carousel('next');
  }, 2000);


    
    });

