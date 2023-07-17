import { hideLoading } from "./toggleLoading.js";
import getElement from "../utils/getElement.js";

const displaySingleDrink = (drink) => {

    // Hiding the Loading
    hideLoading();

    console.log(drink);

};

export default displaySingleDrink;