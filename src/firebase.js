import firebase from "firebase";

const firebaseConfig = {
    apiKey: "SECRET",
    authDomain: "SECRET",
    projectId: "SECRET",
    storageBucket: "SECRET",
    messagingSenderId: "SECRET",
    appId: "SECRET",
};

const fbase = firebase.initializeApp(firebaseConfig);
export default fbase;