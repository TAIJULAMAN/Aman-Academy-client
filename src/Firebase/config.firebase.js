// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApH8lWXoUqwNSijhPRvQm7GAmjUi5mXjI",
  authDomain: "aman-academy-8993b.firebaseapp.com",
  projectId: "aman-academy-8993b",
  storageBucket: "aman-academy-8993b.appspot.com",
  messagingSenderId: "26043336313",
  appId: "1:26043336313:web:9888d2bb4f0d45b4cc36a8",
  measurementId: "G-V5QN6S0X26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app ;
