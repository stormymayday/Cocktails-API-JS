import getElement from "./utils/getElement.js";
import presentDrinks from "./src/presentDrinks.js";
import './src/searchForm.js';

// Search cocktail by name
const cocktailsURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

window.addEventListener("DOMContentLoaded", () => {

    presentDrinks(cocktailsURL);

});