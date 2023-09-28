import createCard from "./js/createCard.js"
import cardRestaurants from "./js/cardRestaurants.js";

//selecting cards container
const cards = document.querySelector(".cards");
//parametre (restaurantName, image, link, category, address, takeaway, price, star)

for (let i = 0; i < cardRestaurants.length; i++){
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
