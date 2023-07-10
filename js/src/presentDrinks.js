import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";

const presentDrinks = async (url) => {

    // fetching drinks
    const data = await fetchDrinks(url);

    // displaying drinks
    const section = await displayDrinks(data);

};

export default presentDrinks;