import * as firebase from 'firebase/app'
import 'firebase/database'

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyDtCUmTAoiHi6CAWHV4aNy6T8JT6KP1l50",
  authDomain: "calgarycrime-9c9d0.firebaseapp.com",
  databaseURL: "https://calgarycrime-9c9d0-default-rtdb.firebaseio.com",
  projectId: "calgarycrime-9c9d0",
  storageBucket: "calgarycrime-9c9d0.appspot.com",
  messagingSenderId: "845317394150",
  appId: "1:845317394150:web:6f25e93fa86a69ef863527"
}



const app = firebase.initializeApp(firebaseConfig)

// utils
let db = app.database()

export default db
