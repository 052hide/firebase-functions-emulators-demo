<template>
  <div>
    <main class="main">
      <nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class sample extends Vue {}
</script>

<style lang="scss" scoped>
.main {
  margin-top: 54px;
}
</style>
