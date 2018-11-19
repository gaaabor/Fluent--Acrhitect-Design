



// NAVBAR SHRINK
if ( $(window).width() > 1200) {
  $(window).scroll(function(){
    if ($(document).scrollTop() > 50) {
      $('.navbar').addClass('shrink');
    } else {
      $('.navbar').removeClass('shrink');
    }
  });
}

$(function() {
  $('.scroll-down').click (function() {
    $('html, body').animate({scrollTop: $('section.ok').offset().top}, 'slow');
    return false;
  });
});




// SCROLL REVEAL

window.sr = ScrollReveal();

sr.reveal('#main1', {
  duration: 2000,
  origin: 'top',
  distance: '300px'
});

sr.reveal('#main2', {
  duration: 2000,
  origin: 'right',
  distance: '500px',
  delay: 1000,
});

sr.reveal('#main3', {
  duration: 2000,
  origin: 'bottom',
  distance: '300px',
  delay: 1500
});

sr.reveal('.title', {
  duration: 1000,
  origin: 'bottom',
  distance: '100px',
  viewFactor: 0.7
});

// Gallery reveal

sr.reveal('#g-left1', {
  duration: 1500,
  origin: 'left',
  viewFactor: 0.4,
  distance: '100px'
});

sr.reveal('#g-mid1', {
  duration: 1500,
  origin: 'bottom',
  viewFactor: 0.4,
  distance: '100px'
});

sr.reveal('#g-right1', {
  duration: 1500,
  origin: 'right',
  viewFactor: 0.4,
  distance: '100px'
});

sr.reveal('#g-left2', {
  duration: 1500,
  origin: 'left',
  viewFactor: 0.4,
  distance: '100px'
});

sr.reveal('#g-mid2', {
  duration: 1500,
  origin: 'bottom',
  viewFactor: 0.4,
  distance: '100px'
});

sr.reveal('#g-right2', {
  duration: 1500,
  origin: 'right',
  viewFactor: 0.4,
  distance: '100px'
});


// TESTAMONIAL REVEAL

sr.reveal('.tes-box', {
  duration: 1500,
  origin: 'bottom',
  viewFactor: 0.4,
  distance: '100px',
});

// TEAM REVEAL

sr.reveal('#t-left1', {
  duration: 1500,
  origin: 'left',
  viewFactor: 0.4,
  distance: '100px'
});

sr.reveal('#t-mid1', {
  duration: 1500,
  origin: 'bottom',
  viewFactor: 0.4,
  distance: '100px'
});

sr.reveal('#t-right1', {
  duration: 1500,
  origin: 'right',
  viewFactor: 0.4,
  distance: '100px'
});

sr.reveal('#t-left2', {
  duration: 1500,
  origin: 'left',
  viewFactor: 0.4,
  distance: '100px'
});

sr.reveal('#t-mid2', {
  duration: 1500,
  origin: 'bottom',
  viewFactor: 0.4,
  distance: '100px'
});

sr.reveal('#t-right2', {
  duration: 1500,
  origin: 'right',
  viewFactor: 0.4,
  distance: '100px'
});

// CONTACT REVEAL

sr.reveal('#contact-title', {
  duration: 1500,
  origin: 'bottom',
  viewFactor: 0.4,
  distance: '100px'
});

sr.reveal('#form', {
  duration: 1500,
  origin: 'bottom',
  viewFactor: 0.4,
  distance: '100px'
});