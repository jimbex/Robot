function login() {
    const enteredPassword = document.getElementById('password').value;

    // Simulate checking entered password against stored data
    fetch('password.json')
        .then(response => response.json())
        .then(data => {
            const storedPassword = data.password;

            if (enteredPassword === storedPassword) {
                window.location.href="find.html";
            } else {
                alert('Invalid password. Please try again.');
            }
        })
        .catch(error => console.error('Error:', error));
}
