function searchObject() {
            // Get the user-entered object query
            var objectQuery = document.getElementById('object-query').value;
            const array = ['apple', 'orange', 'grape'];


            if (array.includes(objectQuery)) {
                window.location.href="main.html";
            } else {
                alert('Searching for: ' + objectQuery);
            }
            // Implement your object identification logic here
            // For simplicity, this example just alerts the user with the entered query
            
        }
