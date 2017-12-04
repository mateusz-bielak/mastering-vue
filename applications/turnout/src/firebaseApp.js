import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAMsDckJI_nUaMCosQHNHN0KLb1HGBglKE",
  authDomain: "turnout-9313.firebaseapp.com",
  databaseURL: "https://turnout-9313.firebaseio.com",
  projectId: "turnout-9313",
  storageBucket: "turnout-9313.appspot.com",
  messagingSenderId: "75168866820"
};

export const firebaseApp = firebase.initializeApp(config);
export const eventsRef = firebaseApp.database().ref().child('events');
