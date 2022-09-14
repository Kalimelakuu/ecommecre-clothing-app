import { initializeApp } from "firebase/app";

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

import{
    getFirestore, 
    doc, 
    getDoc, 
    setDoc,
    
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCbd0LygB4SbUKJLU7JshqR_2NbVkTXvV0",
  authDomain: "ecommerce-clothing-db-f1cd3.firebaseapp.com",
  projectId: "ecommerce-clothing-db-f1cd3",
  storageBucket: "ecommerce-clothing-db-f1cd3.appspot.com",
  messagingSenderId: "464377371016",
  appId: "1:464377371016:web:66333984a016145838823d"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider =  new GoogleAuthProvider();

provider.setCustomParameters({
    prompt : "select_account"
})

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) =>{
    const userDocRef = doc( db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userDocRef);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){

        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc( userDocRef, {
                displayName,
                email, 
                createdAt
            });
        }catch(error){
            console.log('error creating the user');
        }

    }
    return userDocRef;
}