function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate checking credentials against stored data
    fetch('users.json')
        .then(response => response.json())
        .then(data => {
            const user = data.find(u => u.password === password);

            if (user) {
                window.location.href="find.html";
            } else {
                alert('Invalid credentials. Please try again.');
            }
        })
        .catch(error => console.error('Error:', error));
}
