document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    fetch('credentials.txt')
        .then(response => response.text())
        .then(data => {
            var credentials = data.split('\n');
            var storedUsername = credentials[0];
            var storedPassword = credentials[1];

            var statusElement = document.getElementById('status');
            if (username === storedUsername && password === storedPassword) {
                statusElement.style.backgroundColor = 'green';
            } else {
                statusElement.style.backgroundColor = 'red';
            }
        });
});