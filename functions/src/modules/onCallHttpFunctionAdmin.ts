import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'
import { defaultRuntimeOptions, defaultRegion } from '../consts'

const db = admin.firestore()

type ResType = {
  success: boolean
  error?: Error
  data?: any
}

module.exports = functions
  .runWith(defaultRuntimeOptions)
  .region(defaultRegion)
  .https.onCall(
    async (
      _data: any,
      _ctx: functions.https.CallableContext
    ): Promise<ResType> => {
      let res: ResType = {
        success: true
      }
      try {
        const articles: any[] = []
        const articlesQuerySnapshot = await db
          .collection('articles')
          .get()
          .catch((e) => {
            throw e
          })
        articlesQuerySnapshot.forEach((doc) => {
          articles.push({ id: doc.id, ...doc.data() })
        })

        res = {
          success: true,
          data: articles
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
