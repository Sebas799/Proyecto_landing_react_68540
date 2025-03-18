import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAjVu8fKCMES5h17ZTsCl1HhCFWWo7sQ1I",
    authDomain: "e-commerce-salas.firebaseapp.com",
    projectId: "e-commerce-salas",
    storageBucket: "e-commerce-salas.firebasestorage.app",
    messagingSenderId: "1065964368301",
    appId: "1:1065964368301:web:f8ca67db5b2349ad823124"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
