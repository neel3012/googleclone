import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyAy5JcPSCIWv_s_EgvpisIRy6_Nk1Ca_pI",
  authDomain: "clone-1ef58.firebaseapp.com",
  projectId: "clone-1ef58",
  storageBucket: "clone-1ef58.appspot.com",
  messagingSenderId: "1079619068436",
  appId: "1:1079619068436:web:9a3d03cf0f60cda7f47d01"
  
};

// Initialize Firebase
const firebaseapp=firebase.initializeApp(firebaseConfig);
const db=firebaseapp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
         
export {db,auth,provider};
