import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyBuPPF7fBzhhWRBFbUfY4BRbRnAhKEXGX8",
  authDomain: "uni-map-fd6c6.firebaseapp.com",
  projectId: "uni-map-fd6c6",
  storageBucket: "uni-map-fd6c6.appspot.com",
  messagingSenderId: "726433729619",
  appId: "1:726433729619:web:4fa6581b569b178643caa6"
};
const app = initializeApp(firebaseConfig);

// Initialisez Firebase Auth avec AsyncStorage pour la persistance
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const db = getFirestore(app);
export { auth };