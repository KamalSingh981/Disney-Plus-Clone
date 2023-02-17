import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAX3RTVbBMUeJ8CwWjfEXi0dLlKYRprfNM",
  authDomain: "disney-plus-clone-7a1b7.firebaseapp.com",
  databaseURL: "https://disney-plus-clone-7a1b7-default-rtdb.firebaseio.com",
  projectId: "disney-plus-clone-7a1b7",
  storageBucket: "disney-plus-clone-7a1b7.appspot.com",
  messagingSenderId: "493830260982",
  appId: "1:493830260982:web:8838f8e26c924d5b3a04d7",
  measurementId: "G-KHTNZFTK03"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;