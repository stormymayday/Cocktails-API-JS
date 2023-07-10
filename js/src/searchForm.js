import getElement from "../utils/getElement.js";
import presentDrinks from "./presentDrinks.js";

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const form = getElement('.search-form');
// Selecting the input field using the 'name' attribute
const input = getElement('[name="drink"]');

// 'keyup' Event Listener
form.addEventListener('keyup', (e) => {

    e.preventDefault();

    const value = input.value;

    // Checking if the input value is empty
    if (!value) {

        // Exiting the function
        return;

    } else {

        // Invoking presentDrinks passing in the baseURL + the input value
        presentDrinks(`${baseURL}${value}`);

    }

});