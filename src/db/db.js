import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAlXR_gBeQfdPegcDmOEYtOJ1DIyzbr9o",
  authDomain: "ecommerce-73860-corbalan.firebaseapp.com",
  projectId: "ecommerce-73860-corbalan",
  storageBucket: "ecommerce-73860-corbalan.firebasestorage.app",
  messagingSenderId: "437130389861",
  appId: "1:437130389861:web:5e9bed7ea5e54bacbb598c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;