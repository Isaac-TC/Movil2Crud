import { initializeApp } from "firebase/app";
import { getDatabase} from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyCL93axv4O7WzEB_SUtiQZNTgQ2hcXNsr0",
  authDomain: "app-crud-b4fd5.firebaseapp.com",
  databaseURL: "https://app-crud-b4fd5-default-rtdb.firebaseio.com",
  projectId: "app-crud-b4fd5",
  storageBucket: "app-crud-b4fd5.firebasestorage.app",
  messagingSenderId: "212880538692",
  appId: "1:212880538692:web:86cb2a8ce83c3d61f31011"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)