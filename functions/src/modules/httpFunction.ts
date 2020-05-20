import * as functions from 'firebase-functions'
import { defaultRuntimeOptions, defaultRegion } from '../consts'

const _cors = require('cors')({ origin: true })

module.exports = functions
  .runWith(defaultRuntimeOptions)
  .region(defaultRegion)
  .https.onRequest((_request, response) => {
    _cors(_request, response, () => {
      response.send('Http!!')
    })
  })
