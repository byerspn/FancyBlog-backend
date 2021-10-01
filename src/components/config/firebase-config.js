import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAKiIpBFvSJWl-takwgcC5uGUsKEVc_b-M",
  authDomain: "fancy-blog-frontend-cfcfd.firebaseapp.com",
  projectId: "fancy-blog-frontend-cfcfd",
  storageBucket: "fancy-blog-frontend-cfcfd.appspot.com",
  messagingSenderId: "120828020125",
  appId: "1:120828020125:web:9bf57aa1a8576528931b74",
  measurementId: "G-L8ZN2Y15VP",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;