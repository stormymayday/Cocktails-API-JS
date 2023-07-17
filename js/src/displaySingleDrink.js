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
    const list = [
        drink.strIngredient1,
        drink.strIngredient2,
        drink.strIngredient3,
        drink.strIngredient4,
        drink.strIngredient5,
    ];

    console.log(list);
};

export default displaySingleDrink;