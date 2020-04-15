  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAs7TOjIDgVTrUzG2MvDqgjtUTB96-06YQ",
    authDomain: "net-ninja-marioplan-113cd.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-113cd.firebaseio.com",
    projectId: "net-ninja-marioplan-113cd",
    storageBucket: "net-ninja-marioplan-113cd.appspot.com",
    messagingSenderId: "5933373159",
    appId: "1:5933373159:web:5f8d36926535805ad27442",
    measurementId: "G-7TR1YM6RPY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true});


  export default firebase;