import fetchDrinks from "./fetchDrinks.js";

const showDrinks = async (url) => {

    // fetching drinks
    const data = await fetchDrinks(url);

    // displaying drinks
    console.log(data);
    // const section = await displayDrinks(data);

};

export default showDrinks;