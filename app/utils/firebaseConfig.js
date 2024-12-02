import { firebase } from '@react-native-firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyACikhey3cBuJ52wgWtMF0JfeTqXyM2cLc",
    authDomain: "expanse-tracker-app-9a6a4.firebaseapp.com",
    projectId: "expanse-tracker-app-9a6a4",
    storageBucket: "expanse-tracker-app-9a6a4.firebasestorage.app",
    messagingSenderId: "929974592635",
    appId: "1:929974592635:web:5fe968c03cbd0338e16ede",
    measurementId: "G-PCRWYGSYST"
  };

// Initialize Firebase if not already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized
}

export { firebase };
