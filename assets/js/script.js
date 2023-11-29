var submitBtn = $("button");
var ingredient = $("#ingredient");

//event listener on submit button

$(submitBtn).on('click', function (event) {
    event.preventDefault();

    var userIngredients = $(this).siblings("#ingredient").val()
    console.log(userIngredients);
    //might need to change to search by ingredient and not drink name
    var name = userIngredients;
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
        //for loop for looping over data objects and "trying" to console log the ingredients
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

    listOfI = []

    // for (let i = 0; i < data.length; i++) {
    //     var ingredientLi = data[i].ingredients()
    //     ingredientLi.push(listOfI)


    // }
    // console.log(listOfI)


});



// function menuBar(x) {
//     x.classList.toggle("change");
// }


//this is comented out for testing
// //fetching cocktail data
// var name = userIngredients;
// var apiKey = '7t2sHRZWaFF1UKnhMSLCeQ==iC5BhRw1veT5gYny';

// fetch(`https://api.api-ninjas.com/v1/cocktail?name=${name}`, {
//     method: 'GET',
//     headers: {
//         'X-Api-Key': apiKey,
//         'Content-Type': 'application/json'
//     }
// })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok.');
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//     });


// this is a change


//window.onload = fetchData;