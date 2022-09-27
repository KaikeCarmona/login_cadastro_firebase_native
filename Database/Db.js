import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxwTVsJRHD9SLCLoExfujdpLK09zvZbVk",
  authDomain: "receitas-lo.firebaseapp.com",
  projectId: "receitas-lo",
  storageBucket: "receitas-lo.appspot.com",
  messagingSenderId: "279500609214",
  appId: "1:279500609214:web:c2c6b99bb51d3bf5eff0ef",
  measurementId: "G-THSS8F9L49"

}

const app = initializeApp(firebaseConfig);
const auth =  getAuth(app);
const analytics = getAnalytics(app);
