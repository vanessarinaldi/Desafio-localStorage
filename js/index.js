document.getElementById('buttonText').addEventListener('click', function() {
    

let input = document.getElementById('inputText').value;
localStorage.setItem('datoGuardado', input);
})