<template>
  <div class="page-top">
    <div v-if="isWaiting" class="waiting">処理中</div>
    <section class="section">
      <button v-if="isLoggedIn" class="app-btn" @click="logout()">
        Logout
      </button>
      <button v-else class="app-btn" @click="login()">Login</button>
      <P>ログイン状態: {{ isLoggedIn }}</P>
    </section>

    <section class="section">
      <button class="app-btn" @click="http()">http function</button>
      <p>Response: {{ resHttp }}</p>
    </section>

    <section class="section">
      <button class="app-btn" @click="onCallHttp()">
        on call http function
      </button>
      <p>Response: {{ resOnCallHttp }}</p>
    </section>

    <section class="section">
      <button class="app-btn" @click="onCallHttpAuth()">
        on call http function: Auth
      </button>
      <p>Response: {{ resOnCallHttpAuth }}</p>
    </section>

    <section class="section">
      <button class="app-btn" @click="admin()">
        on call http function: Admin
      </button>
      <p>Response: {{ resOnCallHttpFunctionAdmin }}</p>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import '@nuxtjs/axios'
import firebase from 'firebase'
import auth from '~/plugins/firebase/auth'
import functions from '~/plugins/firebase/functions'

@Component
export default class sample extends Vue {
  isWaiting: boolean = false
  isLoggedIn: boolean = false
  resHttp: any = null
  resOnCallHttp: any = null
  resOnCallHttpAuth: any = null
  resOnCallHttpFunctionAdmin: any = null

  async mounted() {
    await new Promise((resolve) => {
      firebase.auth().onAuthStateChanged((u) => {
        if (u) {
          this.isLoggedIn = true
        }
        resolve(u)
      })
    })
  }

  async login() {
    this.isWaiting = true
    const email = process.env.EMAIL || ''
    const password = process.env.PASSWORD || ''
    await auth.signInWithEmailAndPassword(email, password)
    this.isLoggedIn = true
    this.isWaiting = false
  }

  async logout() {
    this.isWaiting = true
    await auth.signOut()
    this.isLoggedIn = false
    this.isWaiting = false
  }

  async http() {
    this.isWaiting = true
    const url =
      process.env.FB_EMULATOR_ORIGIN &&
      process.env.FB_PROJECT_ID &&
      process.env.FB_REGION
        ? `${process.env.FB_EMULATOR_ORIGIN}/${process.env.FB_PROJECT_ID}/${process.env.FB_REGION}/httpFunction`
        : 'https://asia-northeast1-labo-47b9e.cloudfunctions.net/httpFunction'
    const res = await this.$axios.$get(url)
    this.resHttp = res
    this.isWaiting = false
  }

  async onCallHttp() {
    this.isWaiting = true
    const res = await functions.httpsCallable('onCallHttpFunction')({})
    this.resOnCallHttp = res
    this.isWaiting = false
  }

  async onCallHttpAuth() {
    this.isWaiting = true
    const res = await functions.httpsCallable('onCallHttpFunctionAuth')({})
    this.resOnCallHttpAuth = res
    this.isWaiting = false
  }

  async admin() {
    this.isWaiting = true
    const res = await functions.httpsCallable('onCallHttpFunctionAdmin')({})
    this.resOnCallHttpFunctionAdmin = res
    this.isWaiting = false
  }
}
</script>

<style lang="scss" scoped>
.page-top {
  @apply relative p-8;
}
.waiting {
  @apply absolute flex justify-center items-center w-full h-full;
}
.section {
  & + & {
    @apply mt-8;
  }
}
.app-btn {
  @apply flex justify-center items-center py-2 border rounded;
  width: 320px;
}
</style>
