document.addEventListener('DOMContentLoaded', function () {
    // Simulate real-time video streaming
    const videoElement = document.getElementById('video');
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            videoElement.srcObject = stream;
        })
        .catch(error => console.error('Error accessing video stream:', error));

    // Simulate real-time data updates
    setInterval(updateData, 1000);

    // Get real-time location
    getLocation();
});

function updateData() {
    // Simulate real-time data values
    const speedValue = Math.floor(Math.random() * 100) + 1;
    const distanceValue = Math.floor(Math.random() * 1000) + 1;
    const statusValue = Math.random() < 0.5 ? 'Moving' : 'Stopped';

    // Update the HTML elements with the new data
    document.getElementById('speed').textContent = speedValue;
    document.getElementById('distance').textContent = distanceValue;
    document.getElementById('status').textContent = statusValue;
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
            function (position) {
                const locationElement = document.getElementById('location');
                const latitude = position.coords.latitude.toFixed(6);
                const longitude = position.coords.longitude.toFixed(6);
                locationElement.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
            },
            function (error) {
                console.error('Error getting location:', error.message);
                document.getElementById('location').textContent = 'Location not available';
            }
        );
    } else {
        console.error('Geolocation is not supported by this browser.');
        document.getElementById('location').textContent = 'Location not supported';
    }
}
