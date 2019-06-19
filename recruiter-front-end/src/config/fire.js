import firebase from 'firebase/app';

const config = {
  apiKey: 'AIzaSyCe64DcWYRLsibazl5bkk-F3S-TF5tMpos',
  authDomain: 'recruiter-rules.firebaseapp.com',
  databaseURL: 'https://recruiter-rules.firebaseio.com',
  projectId: 'recruiter-rules',
  storageBucket: 'recruiter-rules.appspot.com',
  messagingSenderId: '411745722551',
  appId: '1:411745722551:web:0cf2c866f41a5d90',
};

const fire = firebase.initializeApp(config);
export default fire;
