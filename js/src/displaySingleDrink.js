import { hideLoading } from "./toggleLoading.js";
import getElement from "../utils/getElement.js";

const displaySingleDrink = (data) => {

    // Hiding the Loading
    hideLoading();

    // Extracting the first item of the drinks array
    const drink = data.drinks[0];

    // Desctructuring image, name, and description
    const { strDrinkThumb: image, strDrink: name, strInstructions: description } = drink;

    // Extracting the ingredients
    // NOTE: Some ingredients will be null
    const list = [
        drink.strIngredient1,
        drink.strIngredient2,
        drink.strIngredient3,
        drink.strIngredient4,
        drink.strIngredient5,
    ];

    // console.log(list);

    // Selecting the elements
    const drinkImage = getElement('.drink-img');
    const drinkName = getElement('.drink-name');
    const drinkDescription = getElement('.drink-description');
    const drinkIngredients = getElement('.drink-ingredients');

    // Setting the drink image source attribute
    drinkImage.src = image;

    // Setting the drink name as the page title
    document.title = name;

    // Setting the Name
    drinkName.textContent = name;

    // Setting the Description
    drinkDescription.textContent = description;

    // Setting the Ingredients
    drinkIngredients.innerHTML = list.map((ingredient) => {

        // Checking if the ingredient is NULL
        // Exiting
        if (!ingredient) return;

        // Otherwise, returning the 'ingredient'
        return `<li aria-label="checkbox icon"><i class="far fa-check-square"></i>${ingredient}</li>`;

    }).join('');

};

export default displaySingleDrink;