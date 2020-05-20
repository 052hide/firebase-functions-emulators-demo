import * as admin from 'firebase-admin'

admin.initializeApp()

// emulatorsからサーバーのfirestoreにアクセス可能
// const serviceAccount = {
//   type: '',
//   project_id: '',
//   private_key_id: '',
//   private_key:'',
//   client_email: '',
//   client_id: '',
//   auth_uri: '',
//   token_uri: '',
//   auth_provider_x509_cert_url: '',
//   client_x509_cert_url: ''
// }

// const databaseURL = ''

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
//   databaseURL
// })

const __modules = {
  httpFunction: './modules/httpFunction',
  onCallHttpFunction: './modules/onCallHttpFunction',
  onCallHttpFunctionAuth: './modules/onCallHttpFunctionAuth',
  onCallHttpFunctionAdmin: './modules/onCallHttpFunctionAdmin'
}

const loadFunctions = (modules: { [key: string]: any }) => {
  Object.keys(modules).forEach((key) => {
    if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === key) {
      exports[key] = require(modules[key])
    }
  })
}

loadFunctions(__modules)
