var app = document.getElementById('mgperkk_privet');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .typeString('Делаем новый коридор 307 кафедры')
  /*
  .pauseFor(2000)
  .deleteChars(10)
  .typeString('кек')
  .pauseFor(500)
  */
  .pauseFor(5000)
  .start();
