import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyD0BaSwx75B6Il9KJKcUPvua0PCRjjmMqo',
  authDomain: 'my-preparo.firebaseapp.com',
  projectId: 'my-preparo',
  storageBucket: 'my-preparo.appspot.com',
  messagingSenderId: '191883021217',
  appId: '1:191883021217:web:24815077192ce1c9ce19e0'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const auth = firebaseApp.auth()
export const db = firebaseApp.firestore()
export const storage = firebaseApp.storage()
