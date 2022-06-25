import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyDzPFLeuEsxVRUKdghIdzUG4p7JALE3Zaw",
  authDomain: "chitter-chatter-5ba4d.firebaseapp.com",
  databaseURL: "https://chitter-chatter-5ba4d-default-rtdb.firebaseio.com",
  projectId: "chitter-chatter-5ba4d",
  storageBucket: "chitter-chatter-5ba4d.appspot.com",
  messagingSenderId: "911587127808",
  appId: "1:911587127808:web:b287e85e4c617c46951ee5"
};

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();