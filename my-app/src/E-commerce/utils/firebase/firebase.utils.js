import {initializeApp} from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
 } from 'firebase/auth';

 import {
    getFirestore,
    doc,
    getDoc,
    setDoc
 } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD-lewkKnAB9URvZnxmC1BJhE747KGclVU",
    authDomain: "crown-clothing-db-c9727.firebaseapp.com",
    projectId: "crown-clothing-db-c9727",
    storageBucket: "crown-clothing-db-c9727.appspot.com",
    messagingSenderId: "587781305680",
    appId: "1:587781305680:web:7b123e96a4c685d5ce6855"
  };
  

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup =  () => signInWithPopup(auth, provider);

  export const db = getFirestore();
  
  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef)

    console.log(userSnapshot);
    console.log(userSnapshot.exists());
    
    
    if(!userSnapshot.exists()){
        const {displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch(error){
            console.log('error creating the user', error.message);
        }
    }
  
    return userDocRef;

};