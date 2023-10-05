import createCard from "./js/createCard.js";
import cardRestaurants from "./js/cardRestaurants.js";


const cards = document.querySelector(".cards");
const inputText = document.querySelector(`#searchInput`);
const typeOfFood = document.querySelector(`.filterButton`);
const pricing = document.querySelector(`.filterPrice`);
const notes = document.querySelector(`.filterNotes`);
const inputCheckboxesType = document.querySelectorAll('input[name="typeResto"]');
const inputCheckboxesPrice = document.querySelectorAll('input[name="prix"]');
const inputCheckboxesNote = document.querySelectorAll('input[name="note"]');
// const inputCheckboxes = document.querySelector('.type input[type="checkbox"]');

const generateRestaurantOnMobile = () => {
    cards.innerHTML = "";
    let generatedAtLeastOnce = false;
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
        };
    }
    if (!generatedAtLeastOnce) {
        cards.innerHTML = `<p class="no-result">Aucun résultat</p>`;
    }
}


// cardRestaurants
// tmp = []
// tmp2 = []
// tmp3 = []

// for (checkboxs)
//     if (chekbox.isChecked)
//         filter(cardRestaurants) -> push tmp
// if (tmp vide) -> push tout

// if (prix.isChecked)
//     filter(tmp) -> push tmp2
// if (tmp2 vide) -> push tout

// if (note.isChecked)
//     filter(tmp2) -> push tmp3
// if (tmp3 vide) -> push tout

// for (tmp3)
//     generateCards




const generateRestaurantOnDesktop = () => {
    console.log("yes");

    cards.innerHTML = "";
    let temporaryArray = [];
    let temporaryArray2 = [];
    let temporaryArray3 = [];
    let atleastOneChecked = false;
    let atleastOneCheckedPrice = false;
    let atleastOneCheckedNote = false;
    for (const inputCheckbox of inputCheckboxesType) {
        if (inputCheckbox.checked) {
            atleastOneChecked = true;
            for (let i = 0; i < cardRestaurants.length; i++) {
                if (cardRestaurants[i].category === inputCheckbox.value) {
                    console.log(cardRestaurants[i].restaurantName);
                    temporaryArray.push(cardRestaurants[i]);
                }
            }
        }
    }
    console.log("at leastOne checked" + atleastOneChecked);
    if (temporaryArray.length === 0  /* && !atleastOneChecked*/) {
        if (!atleastOneChecked) {
            temporaryArray = cardRestaurants;
        }
        else {
            temporaryArray = [];
            cards.innerHTML = `<p class="no-result"> Aucun résultat</p>`
        }
    }


    console.log("Array" + temporaryArray);
    for (const inputCheckbox of inputCheckboxesPrice) {
        if (inputCheckbox.checked !== false) {
            atleastOneCheckedPrice = true;
            for (let i = 0; i < temporaryArray.length; i++) {
                if (temporaryArray[i].price === parseInt(inputCheckbox.value)) {
                    temporaryArray2.push(temporaryArray[i]);
                }
            }
        }
    }
    if (temporaryArray2.length === 0 /*&& !atleastOneChecked*/) {
        if (!atleastOneCheckedPrice) {
            temporaryArray2 = temporaryArray;
        }
        else {
            temporaryArray2 = [];
            cards.innerHTML = `<p class="no-result"> Aucun résultat</p>`
        }
    }
    console.log("at leastOne checked 2" + atleastOneChecked);
    console.log("Array2" + temporaryArray2);
    for (const inputCheckbox of inputCheckboxesNote) {
        if (inputCheckbox.checked !== false) {
            atleastOneCheckedNote = true;
            for (let i = 0; i < temporaryArray2.length; i++) {
                if (temporaryArray2[i].note === parseInt(inputCheckbox.value)) {
                    temporaryArray3.push(temporaryArray2[i]);
                }
            }

        }
    }
    if (temporaryArray3.length === 0 /*&& !atleastOneChecked*/) {
        if (!atleastOneCheckedNote) {
            temporaryArray3 = temporaryArray2;
        }
        else {
            temporaryArray3 = [];
            cards.innerHTML = `<p class="no-result"> Aucun résultat</p>`
        }
    }
    console.log("Array3" + temporaryArray3);
    for (let i = 0; i < temporaryArray3.length; i++) {
        const cardHtml = createCard(
            temporaryArray3[i].restaurantName,
            temporaryArray3[i].image,
            temporaryArray3[i].link,
            temporaryArray3[i].category,
            temporaryArray3[i].address,
            temporaryArray3[i].takeaway,
            temporaryArray3[i].price,
            temporaryArray3[i].note
        )
        cards.innerHTML += cardHtml;
    }
}


inputText.addEventListener(`input`, generateRestaurantOnMobile);
typeOfFood.addEventListener(`input`, generateRestaurantOnMobile);
pricing.addEventListener(`input`, generateRestaurantOnMobile);
notes.addEventListener(`input`, generateRestaurantOnMobile);
generateRestaurantOnMobile();


for (const inputCheckbox of inputCheckboxesType) {
    inputCheckbox.addEventListener(`input`, generateRestaurantOnDesktop);
}
for (const inputCheckbox of inputCheckboxesPrice) {
    inputCheckbox.addEventListener(`input`, generateRestaurantOnDesktop);
}
for (const inputCheckbox of inputCheckboxesNote) {
    inputCheckbox.addEventListener(`input`, generateRestaurantOnDesktop);
}
generateRestaurantOnDesktop();


