import firebase from './firebase'
import 'firebase/firestore'

const db = firebase.firestore()
let settings: firebase.firestore.Settings = {}
if (process.env.FB_FIRESTORE_EMULATOR_ORIGIN) {
  settings = {
    host: process.env.FB_FIRESTORE_EMULATOR_ORIGIN,
    ssl: false
  }
}

db.settings(settings)

export default db
