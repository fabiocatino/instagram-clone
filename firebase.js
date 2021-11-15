// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
	apiKey: 'AIzaSyAptsDSTR7i3fVrhp2i0iyKCx7-bQvEHo8',
	authDomain: 'instagram-clone-3f6f5.firebaseapp.com',
	projectId: 'instagram-clone-3f6f5',
	storageBucket: 'instagram-clone-3f6f5.appspot.com',
	messagingSenderId: '864661441753',
	appId: '1:864661441753:web:f8ab84d3304f7975a1c2c8',
	measurementId: 'G-KCVWF9SWVF',
	// apiKey: process.env.NEXT_PUBLIC_FIREBASE_API,
	// authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	// projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	// storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	// messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDERID,
	// appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	// measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID,
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();
// const analytics = getAnalytics(app);

export { app, db, storage };
