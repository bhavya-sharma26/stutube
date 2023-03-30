import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA4vZ-5drLs-1fu1YC2pUOrS9BMADCn1wA",
  authDomain: "stutube-2003.firebaseapp.com",
  projectId: "stutube-2003",
  storageBucket: "stutube-2003.appspot.com",
  messagingSenderId: "522084572853",
  appId: "1:522084572853:web:2fd7aff9d1977551ef68fc"
}
firebase.initializeApp(firebaseConfig)
export default firebase.auth()