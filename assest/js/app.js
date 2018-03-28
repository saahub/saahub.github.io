    $(document).ready(function() {
   if( ! $('#myCanvas').tagcanvas({
     textColour : '#000',
     textFont: 'IBM Plex Serif',
     outlineThickness : 0.5,
     outlineColour : '#000',
     maxSpeed : 0.06,
     depth : 0.8,
     noSelect:true,
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

    window.sr = ScrollReveal({ reset: true , viewOffset: { top: 50, right: 0, bottom: 0, left: 0 },});
sr.reveal('.reveal', { duration: 2000 });
    });


