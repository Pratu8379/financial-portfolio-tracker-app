
import firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyCy7QBTVBhcJZz_xjkmkiK3pyfpzI7xyT0",
  authDomain: "financial-portfolio-7b98c.firebaseapp.com",
  databaseURL: "https://financial-portfolio-7b98c.firebaseio.com",
  projectId: "financial-portfolio-7b98c",
  storageBucket: "financial-portfolio-7b98c.appspot.com",
  messagingSenderId: "953484510514",
  appId: "1:953484510514:web:f463f92686e42034d8832b"
};
// Initialize Firebase
firebase.default.initializeApp(firebaseConfig);


// firebase.analytics();

export default firebase;