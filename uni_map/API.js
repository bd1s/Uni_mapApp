import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyApT9doUgp4W_Sk9OCTYLXlapj7I0MlEz8",
    authDomain: "uni-map-c7975.firebaseapp.com",
    projectId: "uni-map-c7975",
    storageBucket: "uni-map-c7975.appspot.com",
    messagingSenderId: "160778039644",
    appId: "1:160778039644:web:02f91d9fc5fdb041159199"
  };
const app = initializeApp(firebaseConfig);

// Initialisez Firebase Auth avec AsyncStorage pour la persistance
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const db = getFirestore(app);
export { auth };