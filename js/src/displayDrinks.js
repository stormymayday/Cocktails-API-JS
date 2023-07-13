import getElement from "../utils/getElement.js";
import { hideLoading } from "./toggleLoading.js";

const displayDrinks = async ({ drinks }) => {

    const section = getElement('.section-center');
    const errorMessageTitle = getElement('.title');

    // Checking if drinks is null
    if (!drinks) {

        hideLoading();

        // Displaying the error message
        errorMessageTitle.textContent = 'sorry, no drinks matched your search';

        // Clearing the cocktails container div
        section.innerHTML = null;

        // Exiting the displayDrinks function
        return;

    } else {

        const newDrinks = drinks.map((drink) => {

            // console.log(drink);

            // Destructuring the drink object
            const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;

            return `<a href="drink.html">
                <article class="cocktail" data-id="${id}">
                    <img src="${image}" alt="${name}">
                        <h3>${name}</h3>
                </article>
            </a>`;

        }).join('');

        hideLoading();

        // Setting the error message title to an empty string
        errorMessageTitle.textContent = '';

        // Rendering the drinks
        section.innerHTML = newDrinks;

        return section;

    }

};

export default displayDrinks;