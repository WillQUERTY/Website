document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    fetch('credentials.txt')
        .then(response => response.text())
        .then(data => {
            console.log(data); // Ver qué se está obteniendo del archivo credentials.txt
            var credentials = data.split('\n');
            var storedUsername = credentials[0].trim(); // Usar trim() para eliminar espacios en blanco
            var storedPassword = credentials[1].trim(); // Usar trim() para eliminar espacios en blanco

            console.log(username, password, storedUsername, storedPassword); // Verificar los valores antes de la comparación
            var statusElement = document.getElementById('status');
            if (username === storedUsername && password === storedPassword) {
                statusElement.style.backgroundColor = 'green';
            } else {
                statusElement.style.backgroundColor = 'red';
            }
        });
});