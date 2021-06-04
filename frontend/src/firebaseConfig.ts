import 'firebase/auth';

import firebase from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBM4yjYQn3UP881x465U6M55JSVe4cfOKQ",
    authDomain: "shout-outs-lab-8b629.firebaseapp.com",
    projectId: "shout-outs-lab-8b629",
    storageBucket: "shout-outs-lab-8b629.appspot.com",
    messagingSenderId: "946439734091",
    appId: "1:946439734091:web:c66f995a6fcdd55c005ece"
};
// Initialize Firebase
firebase.initializeApp( firebaseConfig );

export const authProvider = new firebase.auth.GoogleAuthProvider();

export function signInWithGoogle(): void {
    firebase.auth().signInWithPopup( authProvider );
}
export function signOut(): void {
    firebase.auth().signOut();
}

export default firebase;