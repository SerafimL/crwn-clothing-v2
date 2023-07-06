import { initializeApp } from "firebase/app";
import { 
	getAuth, 
	signInWithRedirect, 
	signInWithPopup, 
	GoogleAuthProvider, 
	createUserWithEmailAndPassword, 
	signInWithEmailAndPassword
} from 'firebase/auth';
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

export const createUserDocumentFromAuth = (userAuth, additionalInfo = {}) => {
	
	if(!userAuth) return;

	const userDocRef = doc(db, 'users', userAuth.uid);
	//console.log(userDocRef);

	return getDoc(userDocRef).then(userSnapshot => {
		//console.log(userSnapshot);
		//console.log(userSnapshot.exists());
		
		if(userSnapshot.exists()) return;

		const { displayName, email } = userAuth;
		const createdAt = new Date();
		
		return setDoc(userDocRef, {displayName, email, createdAt, ...additionalInfo}).then(result => {
			return userDocRef;
			
		}).catch(error => {
			console.error('ERROR CREATING USER',error);
			throw error;
		})
	})
}

export const createAuthUserWithEmailAndPassword = (email, password) => {
	
	return email && password && createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = (email, password) => {
	
	return email && password && signInWithEmailAndPassword(auth, email, password);
}