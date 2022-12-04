import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBej5cpRxJ-sTAzjk1aVOBjE8NP-OUIjHU",
  authDomain: "netflex-4dda7.firebaseapp.com",
  projectId: "netflex-4dda7",
  storageBucket: "netflex-4dda7.appspot.com",
  messagingSenderId: "335112246616",
  appId: "1:335112246616:web:f5c97006ad630267d7012d",
  measurementId: "G-4H27BZ2VZ2",
};

const app = initializeApp(firebaseConfig);
const stroage = getStorage(app);

export default stroage;
