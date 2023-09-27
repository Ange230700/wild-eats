const restaurantList =[
    {
    reataurantName : "PAZZI",
    image : "",
    link: "",
    category : "Italien",
    address : "21 Rue Fouré, 44000 Nantes",
    takeaway : true,
    price : 1,
    star : 3
    },
    {
    reataurantName : "Guindaille",
    image : "",
    link: "",
    category : "Bistro",
    address : "36 Rue Fouré, 44000 Nantes",
    takeaway : false,
    price : 2,
    star : 3
    },
    {
    reataurantName : "Le Lion et L'agneau",
    image : "https://picsum.photos/600/300",
    link: "",
    category : "Bistro",
    address : "40 Rue Fouré, 44000 Nantes",
    takeaway : false,
    price : 2,
    star : 3   
    },
    {
    reataurantName : "La Récré",
    image : "https://picsum.photos/600/300",
    link: "",
    category : "Bistro",
    address : "5 rue Baron, 44000 Nantes",
    takeaway : false,
    price : 1,
    star : 2   
    },
    {
    reataurantName : "Bairoz",
    image : "https://picsum.photos/600/300",
    link: "",
    category : "Bistro",
    address : "40 Bis Rue Fouré, 44000 Nantes",
    takeaway : false,
    price : 3,
    star : 3   
    },
    {
    reataurantName : "Papà Pasta",
    image : "https://picsum.photos/600/300",
    link: "",
    category : "Italian",
    address : "27 Rue Fouré, 44000 Nantes",
    takeaway : true,
    price : 1,
    star : 3   
    },
]
const cards = document.querySelector(".cards");

function createCard(restaurantName, image, link, category, address, takeaway, price, star){

//change number of starts to HTML
let starHtml = "";

for(let i = 1; i <= star; i++){
  let text = `<i class="fa-solid fa-star"></i>`
  starHtml += text;
}


//change number of euros to HTML
let priceHtml = "";

for(let i = 1; i <= price; i++){
  let text = `<i class="fa-solid fa-euro-sign"></i>`
  priceHtml += text;
}

//condition for takeaway
let takeawayHtml;
if (takeaway){
    takeawayHtml = `<i class="fa-regular fa-square-check"></i> 
    <p class="card-takeaway">vente à emporter</p>`
}else{
    takeawayHtml = "";
}
//copy card
const newCard = `<div class = "card"> 
    <div class="block-card-image"> 
        <img class = "restaurant-photo" src="${image}" alt="restaurant photo">
        <p class="category">Asiatique</p>
    </div>
    <div class="block-card-text">
        <div class="box-title-euro-link">
        <div>
            <p class="restaurant-title">${restaurantName}</p>
        </div>
        <div>
            ${priceHtml}
            <a href="${link}" target="_href"><i class="fa-solid fa-link"></i></a>
        </div>
        </div>
        <p class="card-adress">${address}</p>
        
        <div class="box-takeaway-stars">
              <div class="box-takeaway-icon-text">
                ${takeawayHtml}
              </div>
              <div>
                ${starHtml}
            </div>
            </div>
          </div>
        </div>`
    return newCard;
}

/*cards.innerHTML += newCard*/
cards.innerHTML = createCard("Pazzi", "https://picsum.photos/600/300", "test","italian","36 Rue Fouré, 44000 Nantes",true,3,2)


