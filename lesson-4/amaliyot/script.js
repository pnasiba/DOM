let flags = document.querySelector("cards")

data.forEach((el, i, arr) => 
{
    let card = document.createElement("div")
    card.classList.add("card")
    card.style.width ="18rem"

    card.innerHTML = `

    <img src="${el.flags.png}" alt="${el.flags.alt}">
      <div class="card-body">

        <p><center><strong>Common: ${el.name.common}</strong></center></p>
         <p><strong>Population:</strong> ${el.population} $</p>
        
         
         </div>
    `;

    wrapper.append(card);

})