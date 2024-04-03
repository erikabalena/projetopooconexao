const { getDatabase } = require('firebase/database');
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ6ORzqircKaX4xrnaKvNR0Z7oAQdg25s",
  authDomain: "projectoo-1839a.firebaseapp.com",
  projectId: "projectoo-1839a",
  storageBucket: "projectoo-1839a.appspot.com",
  messagingSenderId: "1055205523542",
  appId: "1:1055205523542:web:345bd6f945481ec752fbf7",
  measurementId: "G-K1LLZZGF17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
