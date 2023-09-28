import createCard from "./js/createCard.js"
import cardRestaurants from "./js/cardRestaurants.js";

//selecting cards container
const cards = document.querySelector(".cards");
//parametre (restaurantName, image, link, category, address, takeaway, price, star)
const inputText = document.querySelector(`#searchInput`);
const typeOfFood = document.querySelector(`.filterButton`);
const pricing = document.querySelector(`.filterPrice`);

const generateRestaurant = () => {

    cards.innerHTML = "";
    for (let i = 0; i < cardRestaurants.length; i++) {
        if (cardRestaurants[i].restaurantName.toLowerCase().includes(inputText.value.toLowerCase())) {


            if (typeOfFood.value === `All` || cardRestaurants[i].category === typeOfFood.value) {

                if (pricing.value === `All` || cardRestaurants[i].price === pricing.value) {
                    console.log(pricing.value, cardRestaurants[i].price);
                    const cardHtml = createCard(
                        cardRestaurants[i].restaurantName,
                        cardRestaurants[i].image,
                        cardRestaurants[i].link,
                        cardRestaurants[i].category,
                        cardRestaurants[i].address,
                        cardRestaurants[i].takeaway,
                        cardRestaurants[i].price,
                        cardRestaurants[i].star
                    )

                    cards.innerHTML += cardHtml;
                }

            }

        }
    }
}


inputText.addEventListener(`input`, generateRestaurant);

typeOfFood.addEventListener(`click`, generateRestaurant);

generateRestaurant();
