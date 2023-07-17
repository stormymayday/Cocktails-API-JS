import { hideLoading } from "./toggleLoading.js";
import getElement from "../utils/getElement.js";

const displaySingleDrink = (data) => {

    // Hiding the Loading
    hideLoading();

    const drink = data.drinks[0];

    const { strDrinkThumb: image, strDrink: name, strInstructions: description } = drink;

};

export default displaySingleDrink;