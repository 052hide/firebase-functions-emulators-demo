import * as functions from 'firebase-functions'

export const defaultRuntimeOptions: functions.RuntimeOptions = {
  timeoutSeconds: 60,
  memory: '512MB'
}

export const defaultRegion = 'asia-northeast1'
