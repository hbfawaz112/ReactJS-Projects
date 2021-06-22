
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAOw2NpX4sdPigJ0YuzMzURuWiZa44L3Rw",
    authDomain: "react-authentication-app-3883a.firebaseapp.com",
    projectId: "react-authentication-app-3883a",
    storageBucket: "react-authentication-app-3883a.appspot.com",
    messagingSenderId: "924340744638",
    appId: "1:924340744638:web:eeb96d4eba2652c42a49ef"
  };
  
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;