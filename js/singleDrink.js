import fetchDrinks from "./src/fetchDrinks.js";
import displaySingleDrink from "./src/displaySingleDrink.js";

// Lookup full cocktail details by id
const singleCocktailURL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007';


const presentDrink = async () => {

    const id = localStorage.getItem('drink');

    console.log(`hello from presentDrink`);


};

window.addEventListener('DOMContentLoaded', presentDrink);