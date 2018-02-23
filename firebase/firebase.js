import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAi5M3MW-nPAEx0NYuHNKg45GwE3G6qR8k",
    authDomain: "connections-1887f.firebaseapp.com",
    databaseURL: "https://connections-1887f.firebaseio.com",
    projectId: "connections-1887f",
    storageBucket: "connections-1887f.appspot.com",
    messagingSenderId: "93737930365" 
  };
  
export default firebaseApp = firebase.initializeApp(firebaseConfig);

