import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseConfigurations } from "./firekeys";

const firebaseConfig = {
  apiKey: firebaseConfigurations.apiKey,
  authDomain: firebaseConfigurations.authDomain,
  projectId: firebaseConfigurations.projectId,
  storageBucket: firebaseConfigurations.storageBucket,
  messagingSenderId: firebaseConfigurations.messagingSenderId,
  appId: firebaseConfigurations.appId,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();