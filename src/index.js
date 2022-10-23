import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initializeApp } from "firebase/app";
import './index.css';

initializeApp({
  apiKey: "AIzaSyBSFMIUsiYNR_gaJlmXVB-FhybCYr_AufY",
  authDomain: "teste-3ec37.firebaseapp.com",
  databaseURL: "https://teste-3ec37-default-rtdb.firebaseio.com",
  projectId: "teste-3ec37",
  storageBucket: "teste-3ec37.appspot.com",
  messagingSenderId: "29336795145",
  appId: "1:29336795145:web:ee30d322047abb1ca060d8"
});

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

