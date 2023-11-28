//menu bar
function menuBar(x) {
    x.classList.toggle("change");
}

//fetching cocktail data
var random = "test";
var name = 'bloody mary';
var apiKey = '7t2sHRZWaFF1UKnhMSLCeQ==iC5BhRw1veT5gYny';

fetch(`https://api.api-ninjas.com/v1/cocktail?name=${name}`, {
    method: 'GET',
    headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json'
    }
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });


// this is a change


//window.onload = fetchData;