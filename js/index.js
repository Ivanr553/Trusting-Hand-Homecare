//Link functions
function facebookLink() {
  window.open("https://www.facebook.com/Trusting-Hand-Homecare-1877394315841612/")
}

function instagramLink() {
  window.open("https://www.instagram.com/trustinghandhomecare/?hl=en")
}

//Object to pass sate along between functions
var state = {
  bannerHeight: $('#banner').height(),
  contactBarHeight: $("#contact-bar").height(),
  row4Height: $("#row-4").height(),
  height: $(window).height(),
  width: $(window).width()
}

//Loading dynamic styles properly on page laod
$(document).ready( function() {
  if($(window).width() > 1000) {
    scrollAnimation()
  }
})

//Animating page if window is proper width
$(window).scroll( function() {
  if($(window).width() > 1000) {
    scrollAnimation()
  }
})

//Checking to see if page must be responsively changed due to resize
$(window).resize( function() {
  if($(window).width() > 1000) {
    scrollAnimation()
  }
  if($(window).width() < 1000 && $('#contact-bar').css('margin-top') != '0px') {
    location.reload()
  }
})

function scrollAnimation() {

  //Based on scroll, will ttranslate the content div up to scroll it over the banner
  $('#content').css({
    'transform' : 'translatey(' + $(window).scrollTop()*-0.25 + 'px)'
  })
  $('#contact-bar').css({
    'transform' : 'translatey(' + $(window).scrollTop()*-0.25 + 'px)'
  })

  //Based on scroll, will blur and scale the image
  $('#banner').css({
    'transform' : 'scale(' + (1 - (0.25*($(window).scrollTop() / $(window).height()))) + ', ' + (1 - (0.25*($(window).scrollTop() / $(window).height()))) + ')',
    'filter' : 'blur(' + (17*($(window).scrollTop() / $(window).height())) + 'px)'
  })


  //Setting height for contact bar
  $("#contact-bar").css({
    'margin-top' : (state.bannerHeight) * 1.1 + 'px',
    'min-height' : state.height / 10 + 'px'
  })

  //Cause contact bar to stickto top of page after scrolling past
  if((state.bannerHeight * 0.8) <= ($(window).scrollTop())) {
    $('#contact-bar').css({
      'position' : 'fixed',
      'top' : '0',
      'left' : '0',
      'margin-top' : '0',
      'transform' : ''
    })
    $('#content').css({
      'margin-top' : state.bannerHeight + state.contactBarHeight + 'px'
    })
  }
  if((state.bannerHeight * 0.8) >= $(window).scrollTop()) {
    $('#contact-bar').css({
      'position' : '',
      'margin-top' : state.bannerHeight + 'px',
      'transform' : 'translatey(' + $(window).scrollTop()*-0.25 + 'px)'
    })
    $('#content').css({
      'margin-top' : '0'
    })
  }
}
