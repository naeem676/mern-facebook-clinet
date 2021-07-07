import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBurE1m5SzprkppvXQIzwjAMzsQFMi-_8o",
    authDomain: "facebook-clone-na.firebaseapp.com",
    projectId: "facebook-clone-na",
    storageBucket: "facebook-clone-na.appspot.com",
    messagingSenderId: "285624527456",
    appId: "1:285624527456:web:c413310687e4a231d73105",
    measurementId: "G-P78TNQHD5K"
  };

  const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig) 
  : firebase.app();

  const auth = firebase.auth();
  const provider = new firebase.auth.FacebookAuthProvider();

  export {auth, provider};