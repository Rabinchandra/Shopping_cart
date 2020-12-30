import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBdjCwoxI8X7QXm5b_zwWUu2bLFjAFX_AY',
  authDomain: 'shopping-cart-4f849.firebaseapp.com',
  projectId: 'shopping-cart-4f849',
  storageBucket: 'shopping-cart-4f849.appspot.com',
  messagingSenderId: '810689941784',
  appId: '1:810689941784:web:cd07f3b23a127cca160e6d',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();

export { db, storage };
