const savedValueElement = document.getElementById('savedValue');
const savedName = localStorage.getItem('userName');
if (savedName) {
  savedValueElement.textContent = `Nome salvato: ${savedName}`;
}


function saveName() {
  const nameInput = document.getElementById('nameInput').value.trim();
  if (nameInput) {
    localStorage.setItem('userName', nameInput);
    savedValueElement.textContent = `Valore salvato: ${nameInput}`;
    alert('Nome salvato!');
  } else {
    alert('Per favore, inserisci un nome valido.');
  }
}

function removeName() {
  localStorage.removeItem('userName');
  savedValueElement.textContent = '';
  alert('Nome rimosso!');
}




let elapsedTime = parseInt(sessionStorage.getItem('elapsedTime')) || 0;

    
    const counterElement = document.getElementById('counter');
    counterElement.textContent = elapsedTime;

   
    setInterval(() => {
      elapsedTime++;
      counterElement.textContent = elapsedTime;
      sessionStorage.setItem('elapsedTime', elapsedTime);
    }, 1000);