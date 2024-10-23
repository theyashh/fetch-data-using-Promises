function fetchData() {
    const apiUrl = 'https://dog.ceo/api/breeds/image/random';
    const dataDiv = document.getElementById('data');
    dataDiv.innerHTML = 'Fetching data...';

    // Fetching the data from the API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // Clear image fetched previously
            dataDiv.innerHTML = '';
            //image fetched from the API
            const img = document.createElement('img');
            img.src = data.message;
            img.alt = 'Random Dog Image';
            img.style.width = '300px';
            img.style.height = 'auto';
            dataDiv.appendChild(img);
        })
        .catch(error => {
            // error message
            dataDiv.innerHTML = `<p class="error">Error fetching data: ${error.message}</p>`;
        });
}

// Attach fetchData function to the button click event
document.getElementById('fetchData').addEventListener('click', fetchData);
