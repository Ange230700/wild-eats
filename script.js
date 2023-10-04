import createCard from "./js/createCard.js"
import cardRestaurants from "./js/cardRestaurants.js";

//selecting cards container
const cards = document.querySelector(".cards");
//parametre (restaurantName, image, link, category, address, takeaway, price, star)
const inputText = document.querySelector(`#searchInput`);
const typeOfFood = document.querySelector(`.filterButton`);
const pricing = document.querySelector(`.filterPrice`);
const notes = document.querySelector(`.filterNotes`);
const inputCheckboxes = document.querySelectorAll('.type input[type="checkbox"]');

// console.log(inputCheckbox);

const generateRestaurant = () => {

    cards.innerHTML = "";
    for (let i = 0; i < cardRestaurants.length; i++) {
        if (cardRestaurants[i].restaurantName.toLowerCase().includes(inputText.value.toLowerCase())) {

            if (typeOfFood.value === `All` || cardRestaurants[i].category === typeOfFood.value) {
                let priceNum = parseInt(pricing.value);
                if (priceNum === 0 || cardRestaurants[i].price === priceNum) {
                    let notesNum = parseInt(notes.value);
                    if (notesNum === 0 || cardRestaurants[i].note === notesNum) {

                        const cardHtml = createCard(
                            cardRestaurants[i].restaurantName,
                            cardRestaurants[i].image,
                            cardRestaurants[i].link,
                            cardRestaurants[i].category,
                            cardRestaurants[i].address,
                            cardRestaurants[i].takeaway,
                            cardRestaurants[i].price,
                            cardRestaurants[i].note
                        )
                        cards.innerHTML += cardHtml;

                    }
                }

            }

        }
    }

    for (const inputCheckbox of inputCheckboxes) {
        // console.log(inputCheckbox.checked)
        if (
            (inputCheckbox.checked && cardRestaurants[i].category === inputCheckbox.value) || (inputCheckbox.checked && cardRestaurants[i].price === parseInt(inputCheckbox.value)) || (inputCheckbox.checked && cardRestaurants[i].note === parseInt(inputCheckbox.value))

        ) {
            const cardHtml = createCard(
                cardRestaurants[i].restaurantName,
                cardRestaurants[i].image,
                cardRestaurants[i].link,
                cardRestaurants[i].category,
                cardRestaurants[i].address,
                cardRestaurants[i].takeaway,
                cardRestaurants[i].price,
                cardRestaurants[i].note
            )
            cards.innerHTML += cardHtml;

        }

    }
}


// Fonction filter version Desktop


inputText.addEventListener(`input`, generateRestaurant);

typeOfFood.addEventListener(`input`, generateRestaurant);
pricing.addEventListener(`input`, generateRestaurant);
notes.addEventListener(`input`, generateRestaurant);

// inputCheckboxes.addEventListener("input", generateRestaurant);

inputCheckboxes.forEach(inputCheckbox => {
    inputCheckbox.addEventListener('input', generateRestaurant);
})
// inputCheckboxes.addEventListener("click", generateRestaurant);

generateRestaurant();


