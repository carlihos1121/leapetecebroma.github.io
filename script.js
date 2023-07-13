function getRandomPosition() {
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    var buttonWidth = document.getElementById('no-button').offsetWidth;
    var buttonHeight = document.getElementById('no-button').offsetHeight;
  
    var maxX = windowWidth - buttonWidth;
    var maxY = windowHeight - buttonHeight;
  
    var randomX = Math.floor(Math.random() * (maxX + 1));
    var randomY = Math.floor(Math.random() * (maxY + 1));
  
    return [randomX, randomY];
  }
  
  function moverBotonNo() {
    var buttonNo = document.getElementById('no-button');
    var newPosition = getRandomPosition();
    buttonNo.style.top = newPosition[1] + 'px';
    buttonNo.style.left = newPosition[0] + 'px';
  }
  
  function mostrarMensaje() {
    alert('Jda eres una cochina, pero bueno, dime cuando :D');
  }
  
  window.onload = function() {
    var buttonNo = document.createElement('button');
    buttonNo.id = 'no-button';
    buttonNo.innerText = 'No';
    buttonNo.onmouseover = moverBotonNo;
    document.body.appendChild(buttonNo);
  }
    