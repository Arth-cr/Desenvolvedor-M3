const bagContainer = document.querySelector('.bag-container');
const produtoList = document.querySelector('.produtos-lista');
const bagList = document.querySelector('.bag-list');
const bagTotalValue = document.getElementById('bag-total-value');
const bagCountInfo = document.getElementById('bag-count-info');


let bagItemId = 1;

var currentindex = 0;

eventListener()

function eventListener(){
  window.addEventListener('DOMContentLoaded', () => {
    loadJSON();
    loadBag();
    
  });
  document.getElementById('bag-btn').addEventListener('click', () => {
    bagContainer.classList.toggle('show-bag-container');
  });

  produtoList.addEventListener('click', addproduto);
  bagList.addEventListener('click', deleteproduto);
}

function updateBaginfo(){
  let bagInfo = findBagInfo();
  bagCountInfo.textContent = bagInfo.produtoCount;
  bagTotalValue.textContent = bagInfo.total;
}

updateBaginfo()

function loadJSON(){
  fetch('produtos.json')
  .then(response => response.json())
  .then(data => {
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


function addproduto(e){
  if(e.target.classList.contains('add-to-bag-btn')){
    let produto = e.target.parentElement;
    getprodutoInfo(produto);
  }
}

function getprodutoInfo(produto){
  let produtoInfo = {
    id: bagItemId,
    imgSrc: produto.querySelector('.produtos-vitrine img').src,
    name: produto.querySelector('.produtos-vitrine h3').textContent,
    price: produto.querySelector('.produtos-vitrine span').textContent
  }
  bagItemId++;
  addToBagList(produtoInfo);
  saveprodutoInBag(produtoInfo);
}

function addToBagList(produto){
  const bagItem = document.createElement('div');
  bagItem.classList.add('bag-item');
  bagItem.setAttribute('data-id', `${produto.id}`);
  bagItem.innerHTML = `
    <img src="${produto.imgSrc}" alt="${produto.name}">
    <div class="bag-item-info">
      <h3 class="bag-item-name">${produto.name}</h3>
      <span class="bag-item-price">R$${produto.price}</span>
    </div>

    <button type="button" class="bag-item-del-btn">X</button>
  `;
  bagList.appendChild(bagItem);
}

function saveprodutoInBag(item) {
  let produtos = getprodutoFromStorage()
  produtos.push(item);
  localStorage.setItem('produtos', JSON.stringify(produtos));
  updateBaginfo();
}

function getprodutoFromStorage() {
  return localStorage.getItem('produtos') ? JSON.parse(localStorage.getItem('produtos')) : [];
}

function loadBag() {
  let produtos = getprodutoFromStorage();
  if(produtos.length < 1) {
    bagItemId = 1;
  } else {
    bagItemId = produtos[produtos.length - 1].id;
    bagItemId++;
  }
  produtos.forEach(produto => addToBagList(produto))
}

function findBagInfo() {
  let produtos = getprodutoFromStorage();
  let total = produtos.reduce((acc, produto) => {
    let price = parseFloat(produto.price.substr(2));
    return acc += price;
  }, 0);

  return {
    total: total.toFixed(2),
    produtoCount: produtos.length
  }
}

function deleteproduto(e){
  let bagItem;
  if(e.target.tagName === "BUTTON"){
    bagItem = e.target.parentElement;
    bagItem.remove()
  } else if(e.target.tagName === "I"){
    bagItem = e.target.parentElement
    bagItem.remove();
  }

  let produtos = getprodutoFromStorage();
  let updatedProdutos = produtos.filter(produto => {
    return produto.id !== parseInt(bagItem.dataset.id);
  });

  localStorage.setItem('produtos', JSON.stringify(updatedProdutos));

  updateBaginfo()
}

////////Filter responsivo


function initFilterContent() {

  const filterTitulos = document.querySelectorAll('.js-side-nav dt')

  const appearClass = 'appear';
  
  if(filterTitulos.length) {
    
    function appearInfo() {
      this.classList.toggle(appearClass);
      this.nextElementSibling.classList.toggle(appearClass)
    }
    
    filterTitulos.forEach((item) =>{
      item.addEventListener('click', appearInfo)
    })
  } 
} initFilterContent();

function initFilterNav() {
    var element = document.querySelector(".side-nav");
    element.classList.add("appear");
  }

function closeFilterNav() {
  var element = document.querySelector(".side-nav");
  element.classList.remove("appear");
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