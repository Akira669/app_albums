import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBkcRuXPKPIb1luqBmHUOrr-dzycIk3cpI",
    authDomain: "my-first-projectj-album-react.firebaseapp.com",
    databaseURL: "https://my-first-projectj-album-react.firebaseio.com",
    projectId: "my-first-projectj-album-react",
    storageBucket: "",
    messagingSenderId: "118406767232"
  };

  firebase.initializeApp(config);

  export default firebase;