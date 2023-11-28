//menu bar
function menuBar(x) {
    x.classList.toggle("change");
}

//fetch from API
function fetchData() {
    const apiUrl = 'https://api-ninjas.com/api/cocktail';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            document.getElementById('results').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while fetching data. Please try again later.');
        });
}

window.onload = fetchData;