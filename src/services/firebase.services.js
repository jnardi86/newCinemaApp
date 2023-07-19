import {
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
    
} from 'firebase/auth'

import { auth } from '../core/config/firebase.config'; 


export const signInWithEmail = async (email, password) => {

    
    return await signInWithEmailAndPassword(auth, email, password);
    
}

export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(auth, provider);
}

export const signUpWithEmail = async (email, password) => {

    return await createUserWithEmailAndPassword(auth, email, password);

}

export const signOut = async () => {
    await auth.signOut();
  };