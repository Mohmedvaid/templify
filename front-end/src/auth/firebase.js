import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBkbWfUuBJqro5Xa6MaLYlLEhDS59yX4fI",
    authDomain: "templify-b7be9.firebaseapp.com",
    databaseURL: "https://templify-b7be9.firebaseio.com",
    projectId: "templify-b7be9",
    storageBucket: "templify-b7be9.appspot.com",
    messagingSenderId: "1062200229972",
    appId: "1:1062200229972:web:0fb33873d5055e1b9bedc1",
    measurementId: "G-KRN2QZ9JRE"
}); 
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}