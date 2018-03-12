// global const Typewriter //
$( document ).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'lastPage'],
    menu: '#myMenu',
    navigation: true,
    navigationPosition: 'left',
    navigationTooltips: ['Home', 'Profile', 'Portfolio', 'Skills'],
    showActiveTooltip: true
  });

  var type = document.getElementById('type');

  const typewriter = new Typewriter(type, {
    loop: true
  });

  typewriter.typeString('Current focus...')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Codewars Kata')
    .pauseFor(2500)
    // .deleteChars(13)
    // .typeString('www.codewars.com/users/mjwim')
    .start();

});
