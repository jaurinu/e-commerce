library.controller('myController', {

  login:()=>{

    (function () {
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

  (function(){

        const hideSignOut = document.getElementById('buttonSignOut');
        const buttonLogin = document.getElementById('buttonLogin');
        var uid = null;
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log(' User is signed in')
                hideSignOut.classList.remove('hide')
                buttonLogin.classList.add('hide');
            } else{
                //redirect to login page
                uid= null;
               console.log('no estás logueado')
            }
          });
    
    
        
    }) ();
    
  },

  functionsHome: () => {


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
      let result = `  <div class="row">
  <div class="col s4 m4 l4">
    <div class="card">
      <div class="card-image">
        <img src="${img}">
        <span class="card-title black-text" >${name}</span>
      </div>
      <div class="card-content">
         <h4 > ${price}</h4>
        <p class="black-text">${description}</p>
      </div>
      <div class="card-action">
      <a class="waves-effect waves-light white btn"><img class="car" src="../src/assets/shopping-cart.svg"></a> 
      </div>
    </div>
  </div>
</div>`;
      printTotalAccesories.insertAdjacentHTML("beforeend", result);
    }

    totalAccesories.forEach(element => {
      let img = element.img;
      let name = element.name;
      let price = element.price;
      let description = element.description;
      printData(img, name, price, description)
    })

    totalMezcaleros.forEach(element => {
      let img = element.img;
      let name = element.name;
      let price = element.price;
      let description = element.description;
      printData(img, name, price, description)
    })

    totalGlasses.forEach(element => {
      let img = element.img;
      let name = element.name;
      let price = element.price;
      let description = element.description;
      printData(img, name, price, description)
    })


  }




})