import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
import setDrink from "./setDrink.js";

const presentDrinks = async (url) => {

    // fetching drinks
    const data = await fetchDrinks(url);

    // displaying drinks
    const section = await displayDrinks(data);

    // Checking if the section is not undefined
    if (section) {

        setDrink(section);

    }

};

export default presentDrinks;