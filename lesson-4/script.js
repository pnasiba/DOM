let wrapper = document.querySelector('.card-wrapper')

for(let i = 0; i<data.length; i++){
    let card=document.createElement('div');

    card.classList.add('card');

    card.innerHTML = `

    <img src="${data[i].image}" alt="product">
      <div class="card-body">

        <p><center><strong>${data[i].title}</strong></center></p>
         <p><strong>Price:</strong> ${data[i].price} $</p>
        
         <ul>
            <li>Description: ${data[i].description}</li>
            <li>Category: ${data[i].category}</li>
            <li><span class="circle" style="rating ${data[i].rating.rate}"></span> </li>
            <li><span class="circle" style="rating ${data[i].rating.count}"></span> </li>
        </ul>    
    `;

    wrapper.append(card);

    console.log(data[i])


}
