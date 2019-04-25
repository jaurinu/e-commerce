
      //Función para desloguear

let mainApp = {};

function logOut() {
  firebase.auth().signOut();
  console.log('bye')
}
mainApp.logOut = logOut;
   





