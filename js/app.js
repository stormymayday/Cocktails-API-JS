import getElement from "./utils/getElement.js";
import presentDrinks from "./src/presentDrinks.js";
import './src/searchForm.js';

// Search cocktail by name
const cocktailsURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

// Lookup full cocktail details by id
const singleCocktailURL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007';

window.addEventListener("DOMContentLoaded", () => {

    presentDrinks(cocktailsURL);

});