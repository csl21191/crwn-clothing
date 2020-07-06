import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyChPE80KI0LOCBu7e_RoPnCKd5fL-tLaow",
    authDomain: "crwn-db-a66bd.firebaseapp.com",
    databaseURL: "https://crwn-db-a66bd.firebaseio.com",
    projectId: "crwn-db-a66bd",
    storageBucket: "crwn-db-a66bd.appspot.com",
    messagingSenderId: "171162464806",
    appId: "1:171162464806:web:4ec570d866de37d85cace7",
    measurementId: "G-6Y4W7PW2TL"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;