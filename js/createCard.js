function createCard(restaurantName, image, link, category, address, takeaway, price, note){

  //change number of starts to HTML
  let starHtml = "";

  for(let i = 1; i <= note; i++){
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
          <p class="category">${category}</p>
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


export default createCard;
