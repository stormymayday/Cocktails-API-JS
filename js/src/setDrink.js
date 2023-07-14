const setDrink = (section) => {

    section.addEventListener('click', (e) => {

        // Temporary for debugging
        e.preventDefault();

        const id = e.target.parentElement.dataset.id;

        console.log(id);

    });

}

export default setDrink;