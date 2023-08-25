import { initializeApp } from 'firebase/app';
import {
  User,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth/cordova';

const firebaseConfig = {
  apiKey: 'AIzaSyBRxrWwu84Eu8wh6SfOS6uR-7bhT5caOus',
  authDomain: 'clone-ac080.firebaseapp.com',
  projectId: 'clone-ac080',
  appId: '1:46774666659:web:60fc99004a3cf85f4d8616',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/**
 * Signs the user in with a Google popup.
 * @returns A promise that resolves with the user's credentials
 */
export function signInWithGoogle() {
  return signInWithPopup(auth, new GoogleAuthProvider());
}

/**
 * Signs the user out.
 * @returns A promise that resolves when the user is signed out.
 */
export function signOut() {
  return auth.signOut();
}

/**
 * Trigger a callback function when user auth state changes.
 * @returns A function to unsubscribe callback.
 */
export function onAuthStateChangedHelper(
  callback: (user: User | null) => void
) {
  return onAuthStateChanged(auth, callback);
}
