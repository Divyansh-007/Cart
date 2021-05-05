import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDCx4TTpgKo86tKtZpl604J6PGS3yXbsK8",
  authDomain: "cart-a0dcd.firebaseapp.com",
  projectId: "cart-a0dcd",
  storageBucket: "cart-a0dcd.appspot.com",
  messagingSenderId: "654705274729",
  appId: "1:654705274729:web:6e18060dc23d3ceea257f8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
