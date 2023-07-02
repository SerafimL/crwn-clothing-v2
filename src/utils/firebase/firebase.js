import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyCvWaf9bq6_W0arV74tPATir64sLV7JQb0",
	authDomain: "udemy-crwn-cloth.firebaseapp.com",
	projectId: "udemy-crwn-cloth",
	storageBucket: "udemy-crwn-cloth.appspot.com",
	messagingSenderId: "891397604468",
	appId: "1:891397604468:web:daf20d4a5b692afd0b7d21"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: 'select_account'
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = (userAuth) => {
	const userDocRef = doc(db, 'users', userAuth.uid);
	//console.log(userDocRef);

	getDoc(userDocRef).then(userSnapshot => {
		//console.log(userSnapshot);
		//console.log(userSnapshot.exists());
		
		if(userSnapshot.exists()) return;

		const { displayName, email } = userAuth;
		const createdAt = new Date();
		
		setDoc(userDocRef, {displayName, email, createdAt}).catch(error => {
			console.error('ERROR CREATING USER',error);
		})
	})
	return userDocRef;
}