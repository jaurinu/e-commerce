const url = 'https://e-commerce-29db7.firebaseio.com/catalogo.json';
console.log(url)
fetch(url)
  .then(response => response.json())
  .then(dataEtsy => {
    const totalDataEtsy = dataEtsy;
    console.log (totalDataEtsy)
    localStorage.setItem('etsyData', JSON.stringify(totalDataEtsy));
  })
  .catch(error => (error))





  const newData = JSON.parse(localStorage.getItem('etsyData'));
  console.log (newData);