var submitBtn = $("button");
var ingredient = $("#ingredient");
var resultsContainer = $("#results"); // Reference to results container
var jokesContainer = $("#dad-jokes"); // Reference to dad jokes container

// Hide results container initially
resultsContainer.hide();

// Hide jokes container initially
jokesContainer.hide();

// Hide modal container initially
$("#saveModal").hide();

// event listener on submit button
$(submitBtn).on('click', function (event) {
    event.preventDefault();

    var userIngredients = ingredient.val();
    console.log(userIngredients);
    // might need to change to search by ingredient and not drink name
    var ingredients = userIngredients;
    var apiKey = '7t2sHRZWaFF1UKnhMSLCeQ==iC5BhRw1veT5gYny';
    fetch(`https://api.api-ninjas.com/v1/cocktail?ingredients=${ingredients}`, {
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

                // Create a div for ingredients with bullets
                var ingredientsContainer = $("<div class='ingredients-container'></div>");

                // Create a ul element for ingredients
                var listOfI = $("<ul class='ingredients-list'></ul>");

                // Loop over ingredients and append to the list
                for (let j = 0; j < cocktail.ingredients.length; j++) {
                    listOfI.append(`<li>${cocktail.ingredients[j]}</li>`);
                }

                // Append list of ingredients to the div
                ingredientsContainer.append(listOfI);

                // Append the ingredients container to the cocktail container
                cocktailContainer.append(ingredientsContainer);

                // Append instructions with label
                cocktailContainer.append(`<p class='instructions-label'>Instructions:</p>`);
                cocktailContainer.append(`<p class='instructions-text'>${cocktail.instructions}</p>`);

                // Append the save button
                var saveButton = $("<button class='btn save-btn'>Save Recipe</button>");
                cocktailContainer.append(saveButton);

                // Append cocktail container to results container
                resultsContainer.append(cocktailContainer);

                // Add click event for save button
                saveButton.on('click', function () {
                    saveRecipeToLocal(cocktail);
                });
            }
        } else {
            // If no results, hide results container
            resultsContainer.hide();
        }

        // 2nd API fetch request for dad jokes
        $.ajax({
            method: 'GET',
            url: 'https://icanhazdadjoke.com/',
            headers: { 'Accept': 'application/json' },
            success: function (response) {
                jokesContainer.show();
                // console logging joke
                var dadJoke = response.joke;
                console.log(dadJoke);

                var jokeSpot = $("<p>").html(dadJoke);
                $(".jokeParent").append(jokeSpot);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error('Error: ', errorThrown);
            }
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        resultsContainer.hide();
    });
});

// Function to save recipe to localStorage
function saveRecipeToLocal(recipe) {
    // Check if localStorage is supported
    if (typeof Storage !== "undefined") {
        // Retrieve existing saved recipes or initialize an empty array
        var savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    
        // Check if the recipe is already saved
        if (!savedRecipes.some(savedRecipe => savedRecipe.name === recipe.name)) {
            // Add the new recipe to the array
            savedRecipes.push(recipe);
    
            // Save the updated array to localStorage
            localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
    
            // Display success message in modal
            displayModal("Recipe saved to Favorites!");
        } else {
            // Display already saved message in modal
            displayModal("Recipe is already saved!");
        }
    } else {
        // Display localStorage not supported message in modal
        displayModal("Your browser does not support localStorage. Unable to save recipe.");
    }
}
    
    // Function to display a modal with a given message
    function displayModal(message) {
    // Get modal element and message element
    var modal = $("#saveModal");
    var modalMessage = $("#modalMessage");
    
    // Set the message content
    modalMessage.text(message);
    
    // Display the modal
    modal.show();
    
    // Get the close button element and attach a click event to hide the modal
    var closeButton = $(".close");
    closeButton.on('click', function () {
        modal.hide();
    });
    
    // Optionally, you can also hide the modal after a certain duration
    //setTimeout(function () {
      //  modal.hide();
    //}, 3000); // Hide modal after 3 seconds (adjust as needed)
    }
    
    // Function to display favorited drinks
    function displayFavorites() {
    // Check if localStorage is supported
    if (typeof Storage !== "undefined") {
        // Retrieve saved recipes from localStorage
        var savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    
        // Clear previous results
        resultsContainer.empty();
    
        if (savedRecipes.length > 0) {
            // Show results container
            resultsContainer.show();
    
            // Iterate over saved recipes and append to the results container
            for (let i = 0; i < savedRecipes.length; i++) {
                var savedRecipe = savedRecipes[i];
                var savedContainer = $("<div class='cocktail-container'></div>");
    
                // Append name
                savedContainer.append(`<h3>${savedRecipe.name}</h3>`);
    
                // Append Ingredients label
                savedContainer.append(`<p class='ingredients-label'>Ingredients:</p>`);
    
                // Create div for ingredients with bullets
                var ingredientsContainer = $("<div class='ingredients-container'></div>");
    
                // Create a ul element for ingredients
                var listOfI = $("<ul class='ingredients-list'></ul>");
    
                // Loop over ingredients and append to the list
                for (let j = 0; j < savedRecipe.ingredients.length; j++) {
                    listOfI.append(`<li>${savedRecipe.ingredients[j]}</li>`);
                }
    
                // Append list of ingredients to the div
                ingredientsContainer.append(listOfI);
    
                // Append the ingredients container to the saved container
                savedContainer.append(ingredientsContainer);
    
                // Append instructions with label
                savedContainer.append(`<p class='instructions-label'>Instructions:</p>`);
                savedContainer.append(`<p class='instructions-text'>${savedRecipe.instructions}</p>`);
    
                // Append the saved container to the results container
                resultsContainer.append(savedContainer);
            }
        } else {
            // If no saved recipes, hide results container
            resultsContainer.hide();
        }
    } else {
        alert("Your browser does not support localStorage. Unable to retrieve saved recipes.");
    }
}    