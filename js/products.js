const categorii = [
  {
    id: 1,
    denumire: "Asortate",
    img: "asortate.png",
  },
  {
    id: 2,
    denumire: "Cookies",
    img: "cookies.png",
  },
  {
    id: 3,
    denumire: "Biscuiți cu magiun",
    img: "magiun.png",
  },
  {
    id: 4,
    denumire: "Biscuiți cu ciocolată",
    img: "ciocolata.png",
  },
  {
    id: 5,
    denumire: "Altele",
    img: "altele.png",
  },
];

const products = [
  {
    id: 1,
    categoryId: 4,
    home: true,
    image: "dame_in_ciocolata.png",
    name: "Dame în Ciocolată",
    pret1: "40.00",
    pret2: "80.00",
    pret3: "183.00",
    kg1: "0.5kg",
    kg2: "1.0kg",
    kg3: "2.5kg",
    cantitate: 1,
  },
  {
    id: 2,
    categoryId: 5,
    image: "nuci.png",
    name: "Nuci cu Lapte Condensat",
    pret1: "53.00",
    pret2: "86.00",
    kg1: "0.6kg",
    kg2: "1.0kg",
    cantitate: 1,
  },
  {
    id: 3,
    categoryId: 3,
    image: "Paleuri cu zmeura.png",
    name: "Paleuri cu Magiun de Zmeură și Fulgi de Cocos",
    pret1: "28.50",
    pret2: "60.50",
    pret3: "130.00",
    kg1: "0.4kg",
    kg2: "0.9kg",
    kg3: "2.0kg",
    cantitate: 1,
  },
  {
    id: 4,
    categoryId: 1,
    image: "Asortat Compromis.png",
    name: "Asortat Compromis",
    pret1: "58.50",
    kg1: "buc.",
    cantitate: 1,
  },
  {
    id: 5,
    categoryId: 1,
    image: "Asortat Mini-Premium.png",
    name: "Asortat Mini-Premium",
    pret1: "33.00",
    kg1: "buc.",
    cantitate: 1,
  },
  {
    id: 6,
    categoryId: 1,
    image: "Asortat Prezent.png",
    name: "Asortat Prezent",
    pret1: "63.00",
    kg1: "buc.",
    cantitate: 1,
  },
  {
    id: 7,
    categoryId: 1,
    image: "Asortat Mini-Compromis.png",
    name: "Asortat Prezent",
    pret1: "34.50",
    kg1: "buc.",
    cantitate: 1,
  },
  {
    id: 8,
    categoryId: 1,
    image: "Asortat Premium.png",
    name: "Asortat Premium",
    pret1: "53.00",
    kg1: "buc.",
    cantitate: 1,
  },
  {
    id: 9,
    categoryId: 1,
    image: "Asortat Mini-Prezent.png",
    name: "Asortat Mini-Prezent",
    pret1: "32.50",
    kg1: "buc.",
    cantitate: 1,
  },
  {
    id: 10,
    categoryId: 2,
    image: "Fursec Minutka.png",
    name: "Fursec Minutka",
    pret1: "24.00",
    pret2: "48.50",
    pret3: "93.00",
    kg1: "0.4kg",
    kg2: "0.9kg",
    kg3: "1.8kg",
    cantitate: 1,
  },
  {
    id: 11,
    categoryId: 2,
    image: "Fursec Fantezie.png",
    name: "Fursec Fantezie",
    pret1: "31.00",
    pret2: "53.50",
    pret3: "113.00",
    kg1: "0.5kg",
    kg2: "0.9kg",
    kg3: "2.0kg",
    cantitate: 1,
  },
  {
    id: 12,
    categoryId: 2,
    image: "Fursec de porumb.png",
    name: "Fursec de Porumb",
    pret1: "23.00",
    pret2: "47.00",
    pret3: "90.00",
    kg1: "0.4kg",
    kg2: "0.9kg",
    kg3: "1.8kg",
    cantitate: 1,
  },
  {
    id: 13,
    categoryId: 2,
    image: "Fursec de ovaz.png",
    name: "Fursec de Ovăz",
    pret1: "89.00",
    kg1: "1.8kg",
    cantitate: 1,
  },
  {
    id: 14,
    categoryId: 5,
    image: "Foitaj_urechiuse.png",
    name: "Urechiușe",
    pret1: "26.50",
    pret2: "43.50",
    pret3: "171.00",
    kg1: "0.4kg",
    kg2: "0.7kg",
    kg3: "3.0kg",
    cantitate: 1,
  },
  {
    id: 15,
    categoryId: 5,
    image: "Foitaj_cu_cereale.png",
    name: "Fursec cu Cereale",
    pret1: "29.00",
    pret2: "59.50",
    pret3: "127.00",
    kg1: "0.4kg",
    kg2: "0.9kg",
    kg3: "2.0kg",
    cantitate: 1,
  },
  {
    id: 16,
    categoryId: 3,
    image: "Fursec cornulete1.png",
    name: "Fursec Cornulețe",
    pret1: "32.50",
    pret2: "61.50",
    pret3: "146.00",
    kg1: "0.5kg",
    kg2: "1.0kg",
    kg3: "2.5kg",
    cantitate: 1,
  },
  {
    id: 17,
    categoryId: 3,
    image: "Fursec Mini-Frutis.png",
    name: "Fursec Mini-Frutis",
    pret1: "32.00",
    pret2: "62.50",
    pret3: "149.00",
    kg1: "0.5kg",
    kg2: "1.0kg",
    kg3: "2.5kg",
    cantitate: 1,
  },
  {
    id: 18,
    categoryId: 3,
    image: "Fursec Frutta.png",
    name: "Fursec Frutta",
    pret1: "33.00",
    pret2: "60.50",
    pret3: "140.00",
    kg1: "0.5kg",
    kg2: "1.0kg",
    kg3: "2.5kg",
    cantitate: 1,
  },
  {
    id: 19,
    categoryId: 4,
    image: "Deliciu White MArshmello.png",
    name: "Fursec White Marshmello",
    pret1: "142.50",
    kg1: "2kg",
    cantitate: 1,
  },
  {
    id: 20,
    categoryId: 4,
    image: "Ineluse glazurate2.png",
    name: "Inelușe Glazurate",
    pret1: "42.00",
    pret2: "80.00",
    pret3: "190.00",
    kg1: "0.5kg",
    kg2: "1.0kg",
    kg3: "2.5kg",
    cantitate: 1,
  },
  {
    id: 21,
    categoryId: 4,
    image: "Ineluse pe ciocolata.png",
    name: "Inelușe pe Ciocolată",
    pret1: "31.00",
    pret2: "70.00",
    pret3: "128.00",
    kg1: "0.4kg",
    kg2: "0.9kg",
    kg3: "2.0kg",
    cantitate: 1,
  },
  {
    id: 22,
    categoryId: 3,
    image: "Fursec Frutta Glazurata.png",
    name: "Fursec Frutta Glazurata",
    pret1: "40.50",
    pret2: "189.00",
    kg1: "0.5kg",
    kg2: "2.5kg",
    cantitate: 1,
  },
  {
    id: 23,
    categoryId: 4,
    image: "Deliciu Black Marshmello.png",
    name: "Deliciu Black Marshmello",
    pret1: "41.50",
    pret2: "150.00",
    kg1: "0.5kg",
    kg2: "2.0kg",
    cantitate: 1,
  },
  {
    id: 24,
    categoryId: 5,
    image: "Fursec Paradis.png",
    name: "Fursec Paradis",
    pret1: "38.00",
    pret2: "66.00",
    pret3: "140.00",
    kg1: "0.5kg",
    kg2: "0.9kg",
    kg3: "2.0kg",
    cantitate: 1,
  },
  {
    id: 25,
    categoryId: 5,
    image: "Bezele1.png",
    name: "Bezele",
    pret1: "21.00",
    kg1: "100g",
    cantitate: 1,
  },
  {
    id: 26,
    categoryId: 5,
    image: "Ineluse_delicioase.png",
    name: "Inelușe Deliciose",
    pret1: "31.00",
    pret2: "53.00",
    pret3: "112.50",
    kg1: "0.5kg",
    kg2: "0.9kg",
    kg3: "2.0kg",
    cantitate: 1,
  },
  {
    id: 27,
    categoryId: 4,
    image: "Muffin_cu_cioburi_de_ciocolată.png",
    name: "Muffin cu Ciocuri de Ciocolată, 15 Bucăți",
    pret1: "120.00",
    kg1: "buc.",
    cantitate: 1,
  },
  {
    id: 28,
    categoryId: 5,
    home: true,
    image: "dame_in_cocos.png",
    name: "Dame în cocos",
    pret1: "41.50",
    pret2: "80.00",
    pret3: "186.00",
    kg1: "0.5kg",
    kg2: "1.0kg",
    kg3: "2.5kg",
    cantitate: 1,
  },
  {
    id: 29,
    categoryId: 3,
    image: "Muffin_cu_visina.png",
    name: "Muffin cu Vișină",
    pret1: "120.00",
    kg1: "buc.",
    cantitate: 1,
  },
  {
    id: 30,
    categoryId: 5,
    home: true,
    image: "Biscuiti Matinali.png",
    name: "Biscuiți Matinali",
    pret1: "31.00",
    pret2: "33.50",
    pret3: "127.00",
    kg1: "0.5kg",
    kg2: "2.0kg",
    cantitate: 1,
  },
  {
    id: 31,
    categoryId: 2,
    image: "cookies3.png",
    home: true,
    name: "Biscuiți",
    pret1: "34.00",
    pret2: "65.50",
    pret3: "135.00",
    kg1: "0.4kg",
    kg2: "0.8kg",
    kg3: "1.7kg",
    cantitate: 1,
  },
];

function initCategories() {
  document.getElementById("categorii").innerHTML = categorii
    .map(
      (category) => `
      
    <a href="./products.html?categoryId=${category.id}">
      <p>${category.denumire}</p>
      <img src="image/${category.img}"> 
    </a>
  `
    )
    .join("");
}

function initProducts() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());

  document.getElementById("produse").innerHTML = products


    .filter((item) => item.categoryId === parseInt(params.categoryId))
    .map(
      (product) => `
      
     <div>
      <div>
      <img src="image/${product.image}">
      <a href="./product.html?id=${product.id}">${product.name}</a>
      <p>Prețul: <span>${product.pret1} lei</span></p>
      <button><img src="image/plus.png"></button>
    </div>
    </div>
  `
    )
    .join("");
}

function initProduct() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());

  const product = products.find((item) => item.id === parseInt(params.id));



  document.getElementById("dateProdus").innerHTML = `
  <div class="produs">
    <div href="./product.html?id=${product.id}">
      <img class="ph" src="./image/${product.image}">
    </div>
    <div class="right">
      <div class="text">
        <p>${product.name}</p>
      </div>

      <div class="pretul">
        <span id="pret" class="pret">${product.pret1} Lei</span>
        <span class="kg" id="kg">/${product.kg1}</span> 
      </div>
        <div class="block_count">
          <div class="input_minus" id="minus">-</div>
          <div class="number" id="num">${product.cantitate}</div>
          <div class="input_plus" id="plus">+</div>
        </div>  

        <button class="adauga-la-cos" id="adauga-cos">
          <img class="bt" src="./image/cart.png" alt="Adaugă la coș">
          <p class="bt_p">Adaugă în coș</p>
        </button>
 
    </div>
    </div>
  `;
}

function initHomeProducts() {
  document.getElementById("homeProducts").innerHTML = products.filter(item => item.home).map(
    (product) => `
  <div >
    <img src="image/${product.image}">
    <a href="./product.html?id=${product.id}">${product.name}</a>
    <p>Prețul: <span>${product.pret1} lei</span></p>
    <button><img src="image/plus.png"></button>
  </div>
  `
  ).join('');
}