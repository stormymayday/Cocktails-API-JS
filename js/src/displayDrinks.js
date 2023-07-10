import getElement from "../utils/getElement.js";

const displayDrinks = async ({ drinks }) => {

    const section = getElement('.section-center');
    const errorMessageTitle = getElement('.title');

    // Checking if drinks is null
    if (!drinks) {

        // Displaying the error message
        errorMessageTitle.textContent = 'sorry, no drinks matched your search';

        // Clearing the cocktails container div
        section.innerHTML = null;

        // Exiting the displayDrinks function
        return;

    } else {

        const newDrinks = drinks.map((drink) => {

            return `<a href="./drink.html">
                <article class="cocktail" data-id="1">
                    <img src="./assets/cocktail.jpg" alt="martini">
                        <h3>martini</h3>
                </article>
            </a>`;

        }).join('');

        // Setting the error message title to an empty string
        errorMessageTitle.textContent = '';

    }

};

export default displayDrinks;