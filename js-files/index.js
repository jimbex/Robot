function login() {
    const enteredPassword = document.getElementById('password').value;

    // Simulate checking entered password against stored data
    if (enteredPassword === '1234') {
        window.location.href="find.html";
    } else {
        alert('Invalid password. Please try again.');
    }
}
