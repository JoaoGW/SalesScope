// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfigurations = {
  apiKey: "AIzaSyB0wxEIqlgkq4rO9_XejPki2qsiQZ18Gl8",
  authDomain: "sales-scope-2fa06.firebaseapp.com",
  projectId: "sales-scope-2fa06",
  storageBucket: "sales-scope-2fa06.appspot.com",
  messagingSenderId: "992913704606",
  appId: "1:992913704606:web:da14c30ccefeb12b3d5d8f",
  measurementId: "G-B5RML0SEMK"
};

export const JWT = "GxPcRo0Lx5I7O1FSFDd6N83b4Utp2AOl7ofE+9Qbjw9gF5L+JwzGYWtMrl+c1pBp";

// Initialize Firebase
const app = initializeApp(firebaseConfigurations);
const analytics = getAnalytics(app);