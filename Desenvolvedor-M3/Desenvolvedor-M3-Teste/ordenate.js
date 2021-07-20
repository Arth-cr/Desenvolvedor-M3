function ordenateByLowerPrice() {
  fetch('produtos.json')
  .then(response => response.json())
  .then(function (data) {
    data.sort(function(a, b) {
      return parseFloat(a.price.replace(",", ".")) - parseFloat(b.price.replace(",", "."));
    })

    let html = '';
    data.forEach(produtos => {
      html += `
        <div class="produtos-vitrine ${produtos.color} ${produtos.size} ${produtos.priceLine}">
          <img src="${produtos.imgSrc}" alt="imagem do produto">
          <h3>${produtos.name}</h3>
          <span>R$ ${produtos.price}</span>
          <p>${produtos.parcels}</p>
          <button class="add-to-bag-btn">Comprar</button>
        </div>
      `;
    });
    produtoList.innerHTML = html;
  });
}

function ordenateByHigherPrice() {
  fetch('produtos.json')
  .then(response => response.json())
  .then(function (data) {
    data.sort(function(a, b) {
      return parseFloat(b.price.replace(",", ".")) - parseFloat(a.price.replace(",", "."));
    })

    let html = '';
    data.forEach(produtos => {
      html += `
        <div class="produtos-vitrine ${produtos.color} ${produtos.size} ${produtos.priceLine}">
          <img src="${produtos.imgSrc}" alt="imagem do produto">
          <h3>${produtos.name}</h3>
          <span>R$ ${produtos.price}</span>
          <p>${produtos.parcels}</p>
          <button class="add-to-bag-btn">Comprar</button>
        </div>
      `;
    });
    produtoList.innerHTML = html;
  });
}

function ordenateByTime() {
  fetch('produtos.json')
  .then(response => response.json())
  .then(function (data) {
    data.sort(function(a, b) {
      return a.createdAt - b.createdAt;
    })

    let html = '';
    data.forEach(produtos => {
      html += `
        <div class="produtos-vitrine ${produtos.color} ${produtos.size} ${produtos.priceLine}">
          <img src="${produtos.imgSrc}" alt="imagem do produto">
          <h3>${produtos.name}</h3>
          <span>R$ ${produtos.price}</span>
          <p>${produtos.parcels}</p>
          <button class="add-to-bag-btn">Comprar</button>
        </div>
      `;
    });
    produtoList.innerHTML = html;
  });
}

//////Ordenar responsivo

function initOrderNav() {
  var element = document.querySelector(".dropdown");
  element.classList.add("appear");
}

function closeOrderNav() {
var element = document.querySelector(".dropdown");
element.classList.remove("appear");
}