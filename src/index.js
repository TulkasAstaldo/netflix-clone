import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./global-styles";
import App from "./App";
import { FirebaseContext } from "./context/firebase";

// import {seedDatabase} from "./seed"

const config = {
  apiKey: "AIzaSyAjW9xrTva0qg3KaLxyMPmXrciDCyWxE6s",
  authDomain: "netflix-clone-75285.firebaseapp.com",
  projectId: "netflix-clone-75285",
  storageBucket: "netflix-clone-75285.appspot.com",
  messagingSenderId: "61399508249",
  appId: "1:61399508249:web:85af5d6b5429f3131c9188",
};

const firebase = window.firebase.initializeApp(config);


//run only once to seed firestore database
// seedDatabase(firebase)

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
