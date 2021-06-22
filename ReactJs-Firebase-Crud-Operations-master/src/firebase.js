import firebase from 'firebase';

var firebaseConfig = {
  
  apiKey: "AIzaSyBPYsbWrt7JHbKShOWT2y-4kGl-vyEtWrs",
  authDomain: "reactjs-crud-905b8.firebaseapp.com",
  databaseURL: "https://reactjs-crud-905b8-default-rtdb.firebaseio.com",
  projectId: "reactjs-crud-905b8",
  storageBucket: "reactjs-crud-905b8.appspot.com",
  messagingSenderId: "1095881665606",
  appId: "1:1095881665606:web:536edf07809dccd262ae47",
  measurementId: "G-EN8S2D7ELR"
  };
  
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);
  
  export default fireDb.database().ref();