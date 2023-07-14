const setDrink = (section) => {

    section.addEventListener('click', (e) => {

        // Temporary for debugging
        e.preventDefault();

        console.log(e.target);

    });

}

export default setDrink;