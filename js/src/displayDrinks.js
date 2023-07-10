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

    } else {



    }

};

export default displayDrinks;