import fb from './firebase'
import 'firebase/functions'

const functions = fb.app().functions('asia-northeast1')

if (process.env.FB_EMULATOR_ORIGIN) {
  functions.useFunctionsEmulator(process.env.FB_EMULATOR_ORIGIN)
}

export default functions
