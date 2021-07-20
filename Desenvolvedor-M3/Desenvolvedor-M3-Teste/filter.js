  function filterSelectionColor(e) {
    var x, i;
    x = document.getElementsByClassName("produtos-vitrine");
    if (e == "all") e = "";

    for (i = 0; i < x.length; i++) {

      removeFilter(x[i], "hideColor");
      removeFilter(x[i], "showByColor");
      if (x[i].className.indexOf(e) == -1 && e !== "") addFilter(x[i], "hideColor");
      if (x[i].className.indexOf(e) > -1) addFilter(x[i], "showByColor");
    } 
  }
  
  function filterSelectionSize(e) {
    var x, i;
    x = document.getElementsByClassName("produtos-vitrine");
    if (e == "all") e = "";

    for (i = 0; i < x.length; i++) {
      removeFilter(x[i], "hideSize");
      removeFilter(x[i], "showBySize");
      if (x[i].className.indexOf(e) == -1 && e !== "") addFilter(x[i], "hideSize");
      
      
      if (x[i].className.indexOf(e) > -1) addFilter(x[i], "showBySize");
    } 
  }

  function filterSelectionPrice(e) {
    var x, i;
    x = document.getElementsByClassName("produtos-vitrine");
    if (e == "all") e = "";

    for (i = 0; i < x.length; i++) {
      removeFilter(x[i], "hidePrice");
      removeFilter(x[i], "showByPrice");
      if (x[i].className.indexOf(e) == -1 && e !== "") addFilter(x[i], "hidePrice");
      
      
      if (x[i].className.indexOf(e) > -1) addFilter(x[i], "showByPrice");
    
    } 
  }

  function filterSelectionClean(e) {
    var x, i;
    x = document.getElementsByClassName("produtos-vitrine");
    if (e == "all") e = "";

    for (i = 0; i < x.length; i++) {
      removeFilter(x[i], "hidePrice");
      removeFilter(x[i], "showByPrice");
      removeFilter(x[i], "hideSize");
      removeFilter(x[i], "showBySize");
      removeFilter(x[i], "hideColor");
      removeFilter(x[i], "showByColor");
    } 
  }

  function addFilter(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }

  function removeFilter(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }

//////Input de Tamanhos <style>

function checkSizeStyle() {

const elementosTamanhos = document.querySelectorAll(".tamanhos li a");

function activeSize(item) {
  elementosTamanhos.forEach((e) => {
    e.classList.remove('checkSize');
  });
  elementosTamanhos[item].classList.add('checkSize');
}

  elementosTamanhos.forEach((item, e) => {
    item.addEventListener('click', () => {
      activeSize(e)
    })
  })
} checkSizeStyle();


function removeSizeStyle() {


const elementosTamanhos = document.querySelectorAll(".tamanhos li a");

function activeSize(item) {
  elementosTamanhos.forEach((e) => {
    e.classList.remove('checkSize');
  });
  elementosTamanhos[item].classList.remove('checkSize');
}

var color = document.getElementsByName("color");
   for(var i=0;i<color.length;i++)
      color[i].checked = false;


var price = document.getElementsByName("price");
   for(var i=0;i<price.length;i++)
      price[i].checked = false;

  activeSize()
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