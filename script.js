import createCard from "./js/createCard.js"
import cardRestaurants from "./js/cardRestaurants.js";

const cards = document.querySelector(".cards");
const inputText = document.querySelector(`#searchInput`);
const typeOfFood = document.querySelector(`.filterButton`);
const pricing = document.querySelector(`.filterPrice`);
const notes = document.querySelector(`.filterNotes`);
const inputCheckboxes = document.querySelectorAll('input[name="typeResto"]');
//const inputCheckboxes = document.querySelectorAll('.type input[type="checkbox"]');
console.log(inputCheckboxes)

const generateRestaurantOnMobile = () => {
    cards.innerHTML = "";

    cardRestaurants
    tmp = []
    tmp2 = []
    tmp3 = []

    for(checkboxs)
    if(chekbox.isChecked)
        filter(cardRestaurants) -> push tmp
    if(tmp vide) -> push tout

    if(prix.isChecked)
        filter(tmp) -> push tmp2
    if(tmp2 vide) -> push tout

    if(note.isChecked)
        filter(tmp2) -> push tmp3
    if(tmp3 vide) -> push tout

    for (tmp3)
        generateCards
    //let generatedAtLeastOnce = false;
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
                        generatedAtLeastOnce = true;
                        cards.innerHTML += cardHtml;
                    }
                }
            }
        }
    }
    if (!generatedAtLeastOnce) {
        cards.innerHTML = `<p class="noResult">Aucun résultat</p>`;
    }
}



const generateRestaurantOnDesktop = () => {
    cards.innerHTML = "";
    //console.log(`J'initialise une liste de cartes vide par défaut: ${cards.innerHTML}`);
    //let defaultCardListGenerated = true;
    //console.log(`Je déclare un booléen à true pour savoir si je dois générer une liste de cartes par défaut: ${defaultCardListGenerated}`);
    for (const inputCheckbox of inputCheckboxes) {
       
        if (inputCheckbox.checked === false){
            //do nothing
        } else {
            
                //console.log(`Je parcours la liste des restaurants: ${cardRestaurants[i].category}`);
        
                //console.log("inputCheckbox.value => " + inputCheckbox.value)
                //console.log("cardRestaurants[i].category => " + cardRestaurants[i].category)
                //console.log(`Je parcours la liste des checkbox: ${inputCheckbox.value} avec la valeur ${inputCheckbox.checked}`);
                for (let i = 0; i < cardRestaurants.length; i++) {
                if (
                    (inputCheckbox.checked && cardRestaurants[i].category === inputCheckbox.value) || (inputCheckbox.checked && cardRestaurants[i].price === parseInt(inputCheckbox.value)) || (inputCheckbox.checked && cardRestaurants[i].note === parseInt(inputCheckbox.value))
                ) { 
                    console.log("Je suis la" + cardRestaurants[i].restaurantName)
                    //console.log(`Je vérifie si la checkbox est cochée: ${inputCheckbox.checked}`);
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
                    //console.log(`Je génère une carte: ${document.querySelector('.block-card-image')}`);
                    //defaultCardListGenerated = false;
                    //console.log(`Je change le booléen à false pour ne pas générer de liste de cartes par défaut: ${defaultCardListGenerated}`);
                    cards.innerHTML += cardHtml;
                    //console.log(`J'ajoute la carte à la liste de cartes: ${cards.innerHTML}`);
                }
             }
        }
        
    }

    if(cards.innerHTML === "") {
        for (let i = 0; i < cardRestaurants.length; i++) {
            
                console.log("Je suis la" + cardRestaurants[i].restaurantName)
                //console.log(`Je vérifie si la checkbox est cochée: ${inputCheckbox.checked}`);
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
                //console.log(`Je génère une carte: ${document.querySelector('.block-card-image')}`);
                //defaultCardListGenerated = false;
                //console.log(`Je change le booléen à false pour ne pas générer de liste de cartes par défaut: ${defaultCardListGenerated}`);
                cards.innerHTML += cardHtml;
                //console.log(`J'ajoute la carte à la liste de cartes: ${cards.innerHTML}`);
            }
         }

}
    



const viewportWidth = window.innerWidth;
if (viewportWidth < 600) {
    inputText.addEventListener(`input`, generateRestaurantOnMobile);
    typeOfFood.addEventListener(`input`, generateRestaurantOnMobile);
    pricing.addEventListener(`input`, generateRestaurantOnMobile);
    notes.addEventListener(`input`, generateRestaurantOnMobile);
    generateRestaurantOnMobile();
}
else {
    for (let i = 0; i < inputCheckboxes.length; i++) {
        inputCheckboxes[i].addEventListener('input', generateRestaurantOnDesktop);
    }
    generateRestaurantOnDesktop();
}




