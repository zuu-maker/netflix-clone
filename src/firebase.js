import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCHx6Eaaoa1gj5bAuAGPrEKiKcHC10-zXI",
    authDomain: "netflix-clone-97270.firebaseapp.com",
    projectId: "netflix-clone-97270",
    storageBucket: "netflix-clone-97270.appspot.com",
    messagingSenderId: "530260958729",
    appId: "1:530260958729:web:787074cb32de0375e662d8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebaseApp.auth();

  export default auth