
      //Función para desloguear

let mainApp = {};

function logOut() {
  firebase.auth().signOut();
  console.log('bye')
  alert('bye')
}
mainApp.logOut = logOut;
   





