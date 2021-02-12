import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBBRH_ayv_aSbOmYK3xRU9la-hYSS_ZDR8",
    authDomain: "discord-mern-50ab3.firebaseapp.com",
    projectId: "discord-mern-50ab3",
    storageBucket: "discord-mern-50ab3.appspot.com",
    messagingSenderId: "801728437240",
    appId: "1:801728437240:web:2ae2cf32a4f2df7674140d",
    measurementId: "G-C9QMNP4P7X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db