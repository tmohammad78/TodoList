import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyCxCVewTWdrVCFbeLFyz2pKuSYAl0u2L3I",
    authDomain: "dolist-9a25a.firebaseapp.com",
    databaseURL: "https://dolist-9a25a.firebaseio.com",
    projectId: "dolist-9a25a",
    storageBucket: "",
    messagingSenderId: "1093644225334",
    appId: "1:1093644225334:web:b30a02db1fb7f93d"
  };
  // Initialize Firebase
  const fire=firebase.initializeApp(firebaseConfig);
export default fire;