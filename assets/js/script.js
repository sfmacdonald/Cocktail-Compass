var submitBtn = $("button");
var ingredient = $("#ingredient");
var resultsContainer = $("#results"); // Reference to results container

// event listener on submit button
$(submitBtn).on('click', function (event) {
    event.preventDefault();

    var userIngredients = $(this).siblings("#ingredient").val();
    console.log(userIngredients);
    // might need to change to search by ingredient and not drink name
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
        .then(data => {
            // Clear previous results
            resultsContainer.empty();

            if (data.length > 0) {
                // Show results container
                resultsContainer.show();

                // Iterate over data and append to the results container
                for (let i = 0; i < data.length; i++) {
                    var cocktail = data[i];
                    var cocktailContainer = $("<div class='cocktail-container'></div>");

                    // Append name
                    cocktailContainer.append(`<h3>${cocktail.name}</h3>`);

                    // Append Ingredients label
                    cocktailContainer.append(`<p class='ingredients-label'>Ingredients:</p>`);

                    // Create a ul element for ingredients
                    var listOfI = $("<ul class='ingredients-list'></ul>");

                    // Loop over ingredients and append to the list
                    for (let j = 0; j < cocktail.ingredients.length; j++) {
                        listOfI.append(`<li>${cocktail.ingredients[j]}</li>`);
                    }

                    // Append list of ingredients
                    cocktailContainer.append(listOfI);

                    // Append instructions with label
                    cocktailContainer.append(`<p class='instructions-label'>Instructions:</p>`);
                    cocktailContainer.append(`<p class='instructions-text'>${cocktail.instructions}</p>`);

                    // Append the cocktail container to the results container
                    resultsContainer.append(cocktailContainer);
                }
            } else {
                // If no results, hide results container
                resultsContainer.hide();
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});

// function menuBar(x) {
//     x.classList.toggle("change");
// }
