import firebase from 'firebase'
import fb from './firebase'
import '@firebase/auth'

const auth = fb.auth()

if (process.browser) {
  auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
}

export default auth
