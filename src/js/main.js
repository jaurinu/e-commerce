
      //Función para desloguear

let mainApp = {};

function logOut() {
  firebase.auth().signOut();
  console.log('bye')
}
mainApp.logOut = logOut;
   
//Función para el sidenav
let dropdownShop =
  (function () {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.dropdown-trigger');
      var instances = M.Sidenav.init(elems);
    })
  })()

$(".dropdown-trigger").dropdown();
 




