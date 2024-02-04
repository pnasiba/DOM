let elementCards = document.querySelector(".cards");
let elementAddForm = document.querySelector(".addForm");


let products = JSON.parse(localStorage.getItem("products")) || []

elementAddForm.addEventListener("submit", function (e) {
    e.preventDefault()

    let product = {
      name: e.target[0].value,
      price: e.target[1].value,
      img: e.target[2].value,
    };

   let check = products.find((el) => el.name == product.name)

   if(check){
    alert(`${product.name} is already available`)
   } else{
     products.push(product);

     localStorage.setItem("products", JSON.stringify(products));

     renderData(products);
   }
})

function renderData(data){
    elementCards.innerHTML = ""
    data.forEach(el => {
        let card = document.createElement("div")
        card.classList.add("card")
        card.style.width = '18rem'


        card.innerHTML += `
        
                <img src="${el.img}" class="card-img-top" alt="${el.name}">
                <div class="card-body">
                    <h5 class="card-title">${el.name}</h5>
                    <p class="card-text">Price: ${el.price}.</p>
                </div>
        
        `;

        elementCards.appendChild(card)
        
    });
}

renderData(products)