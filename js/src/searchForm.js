import getElement from "../utils/getElement.js";
import presentDrinks from "./presentDrinks.js";

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const form = getElement('.search-form');
// Selecting the input field using the 'name' attribute
const input = getElement('[name="drink"]');

// 'keyup' Event Listener
form.addEventListener('keyup', (e) => {

    e.preventDefault();

    console.log(input.value);

});