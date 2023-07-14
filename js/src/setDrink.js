const setDrink = (section) => {

    section.addEventListener('click', (e) => {

        // Temporary for debugging
        // e.preventDefault();

        // Getting the cocktail id from the parent '.cocktail' article
        const id = e.target.parentElement.dataset.id;
        // console.log(id);

        // Placing the cocktail id into the localStorage
        localStorage.setItem('drink', id);

    });

}

export default setDrink;