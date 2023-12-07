# Cocktail-Compass
Leverage APIs to search cocktail recipes by spirits/ingredients

## Table of Contents

- [Project Name](#project-name)
- [Table of Contents](#table-of-contents)
- [Description](#description)
- [Collaboraters](#collaboraters)
- [APIs](#apis)
- [Features](#features)
- [Initial Wireframes](#initial-wireframes)
- [Usage](#usage)
- [Testing](#testing)


## Description

As an aspiring bartender, I need the ability to search for cocktail recipes by inputing an ingredient or spirit into a database so that I can be the best party host possible.

## Collaboraters

The following members of the ASU Coding Bootcamp 2023-2024 participated on this project:

- Zachary Gemmill
- Justin Johnson
- Sean MacDonald
- Miguel Rojas

The collaborators have agreed to leverge Trello as a project tracker to ensure all acceptance criteria are met in the final product and no redundant work is completed. The Trello board may be found here: https://trello.com/b/G297qRRy/cocktail-compass 

## APIs

The following APIs are leveraged for this search engine:

1. https://api-ninjas.com/api/cocktail
2. https://icanhazdadjoke.com/api

## Features

This web-based cocktail search engine has the following features and functions:

Must Have (MVP):

    1. Search for cocktail recipes by inputting an ingredient or spirit
        - Return any possible recipes that match search
        - Save favorite recipes and display later
    2. Display "dad jokes" that can be leveraged by the user as ice breakers while mixing drinks


Nice To Have / Future State Ideas:

    1. Age Verification
    2. Mult-ingredient search: Ability to search by multiple criteria
    3. Rank the cocktail
        - Auto-suggest drinks in the future
    4. Display picture of the drink
    5. Pictures of the ingredients 
    6. API for video tutorial on how to make the drink (i.e.YouTube)
    7. Mixology tools you need for the drink
        - API to Amazon to connect user to order any tools the user does not have

## Initial Wireframes

![Cocktail Wireframe](<./Screen Shot 2023-11-21 at 9.00.57 PM.png>)

## Usage

The github repository may be found at https://github.com/sfmacdonald/Cocktail-Compass

The live URL for the working website is [Insert URL]

When accessed, the website should reflect the following image:

![Coctail Search](<./Screen Shot 2023-12-07 at 6.04.58 AM.png>)

## Testing 
(TBD)

1. **Navigate to the Website**
   - Visit https://sfmacdonald.github.io/Cocktail-Compass/

2. Click on the search bar and select the search button
    - The search button, when hovered on, shall change the display to a graphic of two beverage glasses.
    - The results shall display on the UI in seperate containers and include a "Save" button
        - When selected, the save button shall save the recipe to the user's localStorage for future reference.
        - A modal shall display with a message upon clicking the save button:
            - If it is a new recipe, the message shall indicate that the recipe was saved successfully.
            - If it is a recipe that was already saved, the message shall indicate that the recipe is already in the user's saved selections.
        - Users may select the "Saved Drinks" link on the bottom of the page.
            - This shall initate the page to reload and provide any saved drinks from the user's localStorage.

    - Upon a search being initiated, a random joke shall display on the right hand side of the page. 
        - This shall be updated upon every initated search.

See screenshots below for examples:

![Coctail Results](<./Screen Shot 2023-12-07 at 6.06.17 AM.png>)
![Coctail Save](<./Screen Shot 2023-12-07 at 6.06.59 AM.png>)
![Saved Drinks](<./Screen Shot 2023-12-07 at 6.08.20 AM.png>)