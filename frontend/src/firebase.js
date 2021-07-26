import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCLni7jhxR3ifuBvGf821A5PBj6XFUHG_8",
  authDomain: "portfolio-drive-clone.firebaseapp.com",
  projectId: "portfolio-drive-clone",
  storageBucket: "portfolio-drive-clone.appspot.com",
  messagingSenderId: "824062103210",
  appId: "1:824062103210:web:90f970a73a1a0ae0210ad3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const db = firebaseApp.firestore();

export { auth, provider, db, storage };
