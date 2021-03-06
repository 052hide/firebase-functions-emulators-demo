import * as functions from 'firebase-functions'
import { defaultRuntimeOptions, defaultRegion } from '../consts'

type ResType = {
  success: boolean
  error?: Error
  data?: any
}

module.exports = functions
  .runWith(defaultRuntimeOptions)
  .region(defaultRegion)
  .https.onCall(
    (_data: any, _ctx: functions.https.CallableContext): ResType => {
      let res: ResType = {
        success: true
      }
      try {
        res = {
          success: true,
          data: 'onCall!!'
        }
      } catch (e) {
        res = {
          success: false,
          error: e
        }
        console.log(e) // eslint-disable-line
      }
      return res
    }
  )
