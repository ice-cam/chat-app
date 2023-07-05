import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';

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
export const storage = app.storage();

export const messaging = firebase.messaging.isSupported()
  ? app.messaging()
  : null;

if (messaging) {
  messaging.usePublicVapidKey(
    'BBtjysq_9Td9KhYeeBmIVaGJhFyCnqkvj_z0Mi9w6spPHzT8BPL_Rc3nRzS_9n8TV5oSjO_witbVDU3Axz-egMA'
  );

  messaging.onMessage(data => {
    console.log(data);
  });
}
