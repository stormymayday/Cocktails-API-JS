import fetchDrinks from "./src/fetchDrinks.js";
import displaySingleDrink from "./src/displaySingleDrink.js";

// Lookup full cocktail details by id
const singleCocktailURL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';


const presentDrink = async () => {

    // Getting drink ID from the Local Storage
    const id = localStorage.getItem('drink');

    // Checking if the ID not undefined
    if (!id) {

        // Re-directing to index.html
        window.location.replace('index.html');

    } else {

        // Invoking fetchDrinks passing in 'singleCocktailURL+id'
        const drink = await fetchDrinks(`${singleCocktailURL}${id}`);

        console.log(drink);

    }

};

window.addEventListener('DOMContentLoaded', presentDrink);