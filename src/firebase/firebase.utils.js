import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyBByomFdYSu5yAYmFkDu8I9JTzwXZfhpQ0",
        authDomain: "webshop-db-22c99.firebaseapp.com",
        databaseURL: "https://webshop-db-22c99.firebaseio.com",
        projectId: "webshop-db-22c99",
        storageBucket: "webshop-db-22c99.appspot.com",
        messagingSenderId: "580122512112",
        appId: "1:580122512112:web:3186b611103bcfcf6c1035",
        measurementId: "G-R09PKH2SXF"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;