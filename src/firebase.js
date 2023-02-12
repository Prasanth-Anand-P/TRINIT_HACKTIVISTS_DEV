import firebase from 'firebase';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA0oBhPfRbqRn-dpcvGxisw6yRKKnI3I7A",
    authDomain: "farmfriend-fb677.firebaseapp.com",
    projectId: "farmfriend-fb677",
    storageBucket: "farmfriend-fb677.appspot.com",
    messagingSenderId: "882225480270",
    appId: "1:882225480270:web:36b9bf8c6920a6d40df91f"
  };

const fire = firebase.initializeApp(firebaseConfig);
const auth = getAuth();
export { fire, auth };