import firebase from 'firebase';


const config = {
  apiKey: ' AIzaSyDfNfr1beBjNbV0UNI_EAR7JMDGBzCiy7E',
  databaseURL: 'https://first-app-fa8aa.firebaseio.com/'
};

firebase.initializeApp(config);

export default firebase;