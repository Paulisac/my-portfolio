import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import reportWebVitals from './reportWebVitals';




const firebaseConfig = {
    apiKey: "AIzaSyC3zr-RHIAu0ntTs7e4oiSyRCTVy1vuxWc",
    authDomain: "portfolio-64f3b.firebaseapp.com",
    projectId: "portfolio-64f3b",
    storageBucket: "portfolio-64f3b.appspot.com",
    messagingSenderId: "203400554525",
    appId: "1:203400554525:web:a381dcb324a37b8b687ef4",
    measurementId: "G-HX2F60BT5L"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

 

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);


root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export default db;
