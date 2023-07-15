import fetchDrinks from "./src/fetchDrinks.js";
import displaySingleDrink from "./src/displaySingleDrink.js";

// Lookup full cocktail details by id
const singleCocktailURL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';


const presentDrink = async () => {

    // Getting drink ID from the Local Storage
    const id = localStorage.getItem('drink');

    console.log(`hello from presentDrink`);

    // Invoking fetchDrinks passing in 'singleCocktailURL+id'
    const drink = fetchDrinks(`${singleCocktailURL}${id}`);


};

window.addEventListener('DOMContentLoaded', presentDrink);