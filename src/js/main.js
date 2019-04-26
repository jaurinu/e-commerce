
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

     
     
     
     
     //Función para desloguear

let mainApp = {};

function logOut() {
  firebase.auth().signOut();
  console.log('bye')
}
mainApp.logOut = logOut;
   
//Función para el dropDown
let dropdownShop =
  (function () {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.dropdown-trigger');
      var instances = M.Sidenav.init(elems);
    })
  })()

$(".dropdown-trigger").dropdown();




