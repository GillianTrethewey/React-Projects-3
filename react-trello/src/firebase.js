
import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore/lite';
import { getDatabase } from 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyBSsNCpAcq8HztdCrpl9GsiCUaeiiK8rvs",
    authDomain: "trello-clone-76ac9.firebaseapp.com",
    projectId: "trello-clone-76ac9",
    storageBucket: "trello-clone-76ac9.appspot.com",
    messagingSenderId: "816494722787",
    appId: "1:816494722787:web:708ebb679aa69e18f18fd6"
}

const database = getDatabase();
const app = initializeApp(firebaseConfig)

const db = getFirestore(app);

const boardsRef = collection(db, 'boards')
const listsRef = collection(db, 'lists')
const cardsRef = collection(db, 'cards')

export  { boardsRef, listsRef, cardsRef }