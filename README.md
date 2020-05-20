# firebase-functions-emulators-demo

> Firebase Functions Emulators Demo

## Build Setup

```bash
touch .env
echo FB_APY_KEY=[YOUR_FB_APY_KEY] >> .env
echo FB_AUTH_DOMAIN=[YOUR_FB_AUTH_DOMAIN] >> .env
echo FB_DATABASE_URL=[YOUR_FB_DATABASE_URLL] >> .env
echo FB_PROJECT_ID=[YOUR_FB_PROJECT_ID] >> .env
echo FB_STORAGE_BUCKET=[YOUR_FB_STORAGE_BUCKET] >> .env
echo FB_MESSAGING_SENDER_ID=[YOUR_FB_MESSAGING_SENDER_ID] >> .env
echo FB_APP_ID=[YOUR_FB_APP_ID] >> .env
echo FB_MEASUREMENT_ID=[YOUR_FB_MEASUREMENT_ID] >> .env
echo FB_REGION=[YOUR_FB_REGION] >> .env
echo FB_EMULATOR_ORIGIN=[YOUR_FB_EMULATOR_ORIGIN] >> .env
echo EMAIL=[YOUR_EMAIL] >> .env
echo PASSWORD=[YOUR_PASSWORD] >> .env
```

## firebase functions emulator start
```bash
$ firebase emulators:start --only functions
```

## nuxt run dev
```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
