const url = 'https://e-commerce-29db7.firebaseio.com/catalogo.json';
console.log(url)
fetch(url)
  .then(response => response.json())
  .then(dataEtsy => {
    const totalDataEtsy = dataEtsy;
    const totalAccesories=dataEtsy[0].complementos;
    const totalMezcaleros = dataEtsy[0].mezcaleros;
    const totalGlasses = dataEtsy[0].vasos;
    console.log (totalDataEtsy)
    console.log(totalAccesories);
    console.log (totalMezcaleros);
    console.log (totalGlasses);
    // localStorage.setItem('etsyData', JSON.stringify(totalDataEtsy));
  })
  .catch(error => (error))





  // const newData = JSON.parse(localStorage.getItem('etsyData'));
  // console.log (newData);



  // const printData = (img, name, type, height, weight, candy, candy_count, egg) => {
  //   let result = `<div class="boxesContainer"><div class="cardBox">
  //   <div class="card"><div class="front">
  //         <img class= "imageCard"src=${img}>
  //         </div>
  //         <div class="back"><article class ="informationCard">  <h2>${name}</h2><p> TYPE : ${type}</p>
  //         <p> HEIGHT : ${height}</p>
  //         <p> WEIGHT: ${weight}</p>
  //         <p>CANDY: ${candy}</p>
  //         <p>CANDY COUNT: ${candy_count}</p>
  //         <p>EGG: ${egg}</p>
  //        </article></div></div></div></div>`;
  //   totalData.insertAdjacentHTML("beforeend", result);
  // }
  

  
  //    newData.forEach(element => {
  //     let img = element.img;
  //     let name = element.name;
  //     let type = element.type;
  //     let height = element.height;
  //     let weight = element.weight;
  //     let candy = element.candy;
  //     let candy_count = element.candy_count;
  //     let egg = element.egg;
  //     printData(img, name, type, height, weight, candy, candy_count, egg);
  //   })
  