import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDt1l_ljaSi6OKfA-i8bVK548KIb2vp60s",
    authDomain: "crwn-db-c5fbd.firebaseapp.com",
    projectId: "crwn-db-c5fbd",
    storageBucket: "crwn-db-c5fbd.appspot.com",
    messagingSenderId: "180434657361",
    appId: "1:180434657361:web:0e48b87e57b3a3ff285870"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;