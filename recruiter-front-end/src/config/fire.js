import firebase from "firebase";

const config = process.env.FIREBASE_CONFIG;

const fire = firebase.initializeApp(config);
export default fire;
