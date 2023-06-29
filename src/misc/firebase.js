import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyARR7HY8aYPj89zQKhqOqIcOoSymoGR2Do',
  authDomain: 'chat-web-app-aa9bc.firebaseapp.com',
  projectId: 'chat-web-app-aa9bc',
  storageBucket: 'chat-web-app-aa9bc.appspot.com',
  messagingSenderId: '410660836817',
  appId: '1:410660836817:web:bbef2edfedccdc8be5fcf0',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
