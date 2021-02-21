import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAKtcDI1ox2Af0Ltz6-c5PasTj9HRlQ410",
    authDomain: "grownup-b6a1c.firebaseapp.com",
    projectId: "grownup-b6a1c",
    storageBucket: "grownup-b6a1c.appspot.com",
    messagingSenderId: "479472754108",
    appId: "1:479472754108:web:a6a8236e0e022796489fb9"
};

const fbase = firebase.initializeApp(firebaseConfig);
export default fbase;