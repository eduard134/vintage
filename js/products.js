const products=[ 
    {
      id:1,
      image: "dame_in_ciocolata.png",  
      name: "Dame în Ciocolată",
      pret1: "40.00",
      pret2: "80.00",
      pret3: "183.00",
      kg1: "0.5kg",
      kg2: "1.0kg",
      kg3: "2.5kg",
      cantitate: 1
    },
    {
      id:2,
      image: "nuci.png",
      name: "Nuci cu Lapte Condensat",
      pret1: "53.00",
      pret2: "86.00",
      kg1: "0.6kg",
      kg2: "1.0kg",
      cantitate: 1
    },
    {
      id:3,
      image: "paleuri.png",
      name: "Paleuri cu Magiun de Zmeură și Fulgi de Cocos",
      pret1: "28.50",
      pret2: "60.50",
      pret3: "130.00",
      kg1: "0.4kg", 
      kg2: "0.9kg",
      kg3: "2.0kg",
      cantitate: 1
    },
    {
      id:4,
      image: "Asortat Compromis.png",
      name: "Asortat Compromis",
      pret1: "58.50",
      kg1: "buc.", 
      cantitate: 1
    },
    {
      id:5,
      image: "Asortat Mini-Premium.png",
      name: "Asortat Mini-Premium",
      pret1: "33.00",
      kg1: "buc.", 
      cantitate: 1
    },
    {
      id:6,
      image: "Asortat Prezent.png",
      name: "Asortat Prezent",
      pret1: "63.00",
      kg1: "buc.", 
      cantitate: 1
    },
    {
      id:7,
      image: "Asortat Mini-Compromis.png",
      name: "Asortat Prezent",
      pret1: "34.50",
      kg1: "buc.", 
      cantitate: 1
    },
    {
      id:8,
      image: "Asortat Premium.png",
      name: "Asortat Premium",
      pret1: "53.00",
      kg1: "buc.", 
      cantitate: 1
    },
    {
      id:9,
      image: "Asortat Mini-Prezent.png",
      name: "Asortat Mini-Prezent",
      pret1: "32.50",
      kg1: "buc.", 
      cantitate: 1
    },
    {
      id:10,
      image: "Fursec Minutka.png",
      name: "Fursec Minutka",
      pret1: "24.00",
      pret2: "48.50",
      pret3: "93.00",
      kg1: "0.4kg", 
      kg2: "0.9kg",
      kg3: "1.8kg",
      cantitate: 1
    },
    {
      id:11,
      image: "Fursec Fantezie.png",
      name: "Fursec Fantezie",
      pret1: "31.00",
      pret2: "53.50",
      pret3: "113.00",
      kg1: "0.5kg", 
      kg2: "0.9kg",
      kg3: "2.0kg",
      cantitate: 1
    },
    {
      id:12,
      image: "Fursec de Porumb.png",
      name: "Fursec de Porumb",
      pret1: "23.00",
      pret2: "47.00",
      pret3: "90.00",
      kg1: "0.4kg", 
      kg2: "0.9kg",
      kg3: "1.8kg",
      cantitate: 1
    },
    {
      id:13,
      image: "Fursec de Ovăz.png",
      name: "Fursec de Ovăz",
      pret1: "89.00",
      kg1: "1.8kg", 
      cantitate: 1
    },
    {
      id:14,
      image: "Fursec Urechiușe.png",
      name: "Fursec Urechiușe",
      pret1: "26.50",
      pret2: "43.50",
      pret3: "171.00",
      kg1: "0.4kg", 
      kg2: "0.7kg",
      kg3: "3.0kg",
      cantitate: 1
    },
    {
      id:15,
      image: "Foitaj cu Cereale.png",
      name: "Fursec cu Cereale",
      pret1: "29.00",
      pret2: "59.50",
      pret3: "127.00",
      kg1: "0.4kg", 
      kg2: "0.9kg",
      kg3: "2.0kg",
      cantitate: 1
    },
    {
      id:16,
      image: "Fursec Cornulețe.png",
      name: "Fursec Cornulețe",
      pret1: "32.50",
      pret2: "61.50",
      pret3: "146.00",
      kg1: "0.5kg", 
      kg2: "1.0kg",
      kg3: "2.5kg",
      cantitate: 1
    },
    {
      id:17,
      image: "Fursec Mini-Frutis.png",
      name: "Fursec Mini-Frutis",
      pret1: "32.00",
      pret2: "62.50",
      pret3: "149.00",
      kg1: "0.5kg", 
      kg2: "1.0kg",
      kg3: "2.5kg",
      cantitate: 1
    },
    {
      id:18,
      image: "Fursec Frutta.png",
      name: "Fursec Frutta",
      pret1: "33.00",
      pret2: "60.50",
      pret3: "140.00",
      kg1: "0.5kg", 
      kg2: "1.0kg",
      kg3: "2.5kg",
      cantitate: 1
    },
    {
      id:19,
      image: "Deliciu White Marshmello.png",
      name: "Fursec White Marshmello",
      pret1: "142.50",
      kg1: "2kg", 
      cantitate: 1
    },
    {
      id:20,
      image: "Inelușe Glazurate.png",
      name: "Inelușe Glazurate",
      pret1: "42.00",
      pret2: "80.00",
      pret3: "190.00",
      kg1: "0.5kg", 
      kg2: "1.0kg",
      kg3: "2.5kg",
      cantitate: 1
    },
    {
      id:21,
      image: "Inelușe pe Ciocolată.png",
      name: "Inelușe pe Ciocolată",
      pret1: "31.00",
      pret2: "70.00",
      pret3: "128.00",
      kg1: "0.4kg", 
      kg2: "0.9kg",
      kg3: "2.0kg",
      cantitate: 1
    },
    {
      id:22,
      image: "Fursec Frutta Glazurată.png",
      name: "Inelușe pe Ciocolată",
      pret1: "40.50",
      pret2: "189.00",
      kg1: "0.5kg", 
      kg2: "2.5kg",
      cantitate: 1
    },
    {
      id:23,
      image: "Deliciu Black Marshmellow.png",
      name: "Deliciu Black Marshmellow",
      pret1: "41.50",
      pret2: "150.00",
      kg1: "0.5kg", 
      kg2: "2.0kg",
      cantitate: 1
    },
    {
      id:24,
      image: "Fursec Paradis.png",
      name: "Fursec Paradis",
      pret1: "38.00",
      pret2: "66.00",
      pret3: "140.00",
      kg1: "0.5kg", 
      kg2: "0.9kg",
      kg3: "2.0kg",
      cantitate: 1
    },
    {
      id:25,
      image: "Bezele.png",
      name: "Bezele",
      pret1: "21.00",
      kg1: "100g", 
      cantitate: 1
    },
    {
      id:26,
      image: "Inelușe Delicioase.png",
      name: "Inelușe Deliciose",
      pret1: "31.00",
      pret2: "53.00",
      pret3: "112.50",
      kg1: "0.5kg", 
      kg2: "0.9kg",
      kg3: "2.0kg",
      cantitate: 1
    },
    {
      id:27,
      image: "Muffin cu Ciocuri de Ciocolată, 15 Bucăți.png",
      name: "Muffin cu Ciocuri de Ciocolată, 15 Bucăți",
      pret1: "120.00",
      kg1: "buc.",
      cantitate: 1
    },
    {
      id:28,
      image: "Dame în cocos.png",
      name: "Dame în cocos",
      pret1: "41.50",
      pret2: "80.00",
      pret3: "186.00",
      kg1: "0.5kg", 
      kg2: "1.0kg",
      kg3: "2.5kg",
      cantitate: 1
    },
    {
      id:29,
      image: "Muffin cu Vișină.png",
      name: "Muffin cu Vișină",
      pret1: "120.00",
      kg1: "buc.", 
      cantitate: 1
    },
    {
      id:30,
      image: "Biscuiți Matinali.png",
      name: "Biscuiți Matinali",
      pret1: "31.00",
      pret2: "33.50",
      pret3: "127.00",
      kg1: "0.5kg", 
      kg2: "2.0kg",
      cantitate: 1
    },
    {
      id:31,
      image: "Biscuiți.png",
      name: "Biscuiți",
      pret1: "34.00",
      pret2: "65.50",
      pret3: "135.00",
      kg1: "0.4kg", 
      kg2: "0.8kg",
      kg3: "1.7kg",
      cantitate: 1
    },
]

