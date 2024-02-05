import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "post-it-d295c.firebaseapp.com",
  databaseURL:
    "https://post-it-d295c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "post-it-d295c",
  storageBucket: "post-it-d295c.appspot.com",
  messagingSenderId: "910951490680",
  appId: "1:910951490680:web:53adb3a281639a45eef98d",
  measurementId: "G-M03G6D9VKC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { app, db };
