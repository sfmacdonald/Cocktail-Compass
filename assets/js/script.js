var submitBtn = $("button");
var ingredient = $("#ingredient");
var results = $("#results");

//event listener on submit button

$(submitBtn).on('click', function (event) {
    event.preventDefault();

    var userIngredients = $(this).siblings("#ingredient").val()
    console.log(userIngredients);
    //might need to change to search by ingredient and not drink name
    var name = userIngredients;
    var apiKey = '7t2sHRZWaFF1UKnhMSLCeQ==iC5BhRw1veT5gYny';
    fetch(`https://api.api-ninjas.com/v1/cocktail?ingredients=${name}`, {
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
        //for loop for looping over data objects and "trying" to console log the ingredients
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });





});



fetch(`https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg/preview`, {
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
    //for loop for looping over data objects and "trying" to console log the ingredients
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });