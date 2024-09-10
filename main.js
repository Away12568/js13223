
const wrapper = document.querySelector(".wrapper")

const cards =  ProductsData.map(cards => {
    return `
          <div class="card">
                    <img src=${cards.imageUrl} alt="">
                    <h2>${cards.name}</h2>
                     <s>${cards. oldPrice}</s>
                    <p>${cards. newPrice}</p>
                    <h3></h3>
                </div>
    `
}).join("")

wrapper.innerHTML = cards
