library.controller('myController', {

  login: () => {

    (function() {
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      var uiConfig = {
        callbacks: {
          signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            return true;
          },
          uiShown: function() {
            document.getElementById('loader').style.display = 'none';
          }
        },
        signInFlow: 'popup',
        signInSuccessUrl: 'index.html#/',
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        tosUrl: 'index.html#/',
      };
      ui.start('#firebaseui-auth-container', uiConfig);
    })();

    (function() {

      const hideSignOut = document.getElementById('buttonSignOut');
      const buttonLogin = document.getElementById('buttonLogin');
      var uid = null;
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log(' User is signed in')
          hideSignOut.classList.remove('hide')
          buttonLogin.classList.add('hide');
        } else {
          //redirect to login page
          uid = null;
          console.log('no estás logueado')
        }
      });



    })();

  },

  functionsHome: () => {
    var instance = M.Carousel.init({
      fullWidth: true,
      indicators: true
    });

    const printTotalAccesories = document.getElementById('printTotalAccesories');


    const url = 'https://e-commerce-29db7.firebaseio.com/catalogo.json';
    console.log(url)
    fetch(url)
      .then(response => response.json())
      .then(dataEtsy => {
        const totalDataEtsy = dataEtsy;
        console.log(totalDataEtsy)
        localStorage.setItem('etsyData', JSON.stringify(totalDataEtsy));
      })
      .catch(error => (error))

    const newData = JSON.parse(localStorage.getItem('etsyData'));
    console.log(newData);

    const totalAccesories = newData[0].complementos;
    const totalMezcaleros = newData[0].mezcaleros;
    const totalGlasses = newData[0].vasos;
    console.log(totalAccesories);
    console.log(totalMezcaleros);
    console.log(totalGlasses);



    const printData = (img, name, price, description) => {
      let more = 'Ver más'
      let result = `
     
        <div class="col s3 m3 l3">
        <div class="card products">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src="${img}">
        </div>
        <div class="card-content">
          <span class="card-title teal-text text-l.. ighten-1"><h5>${name} </h5></span>
            <p class="col l2 offset-l10" ><i class="far fa-heart heart-size"></i></p>
            <div class="row">
            <h5 class="blue-grey-text text-lighten-2 col l6"> ${price}</h5>
            <a class="waves-effect waves-light col l6 offset-l1 "><i class="fas fa-shopping-bag shop-bag "></i></a>
            </div>
            <a  class=" activator blue-grey-text text-lighten-2 transparent col l7 offset-l4">${more}</a>
          </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4"><h5>${name}</h5><i class="material-icons right">close</i></span>
          <p class="description-size blue-grey-text text-lighten-2">${description}</p>
        </div>
      </div>
        </div>
    
`;
      printTotalAccesories.insertAdjacentHTML("beforeend", result);
    }

    totalAccesories.forEach(element => {
      let img = element.img;
      let name = element.name;
      let price = element.price;
      let description = element.description;
      let sku = element.sku;
      printData(img, name, price, description, sku)
    }),

    totalMezcaleros.forEach(element => {
      let img = element.img;
      let name = element.name;
      let price = element.price;
      let description = element.description;
      let sku = element.sku;
      printData(img, name, price, description, sku)
    }),

    totalGlasses.forEach(element => {
      let img = element.img;
      let name = element.name;
      let price = element.price;
      let description = element.description;
      let sku = element.sku;
      printData(img, name, price, description, sku)
    });
  }

  // printCart: () => {
  //   const cart = document.getElementById('car');
  //   let resultCart = `
  //   <ul class="collection">
  //     <li class="collection-item">Cuenco con mortero de madera<br>$242.71</li>
  //   </ul>
  //   <a href="#/shop" class="button empty-cart-btn">Seguir Comprando</a> <br>
  // `;
  //
  //   cart.insertAdjacentHTML("beforeend", resultCart);
  // },
});
