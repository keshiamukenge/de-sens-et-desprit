<template>
  <div v-if="loading" class="container-loader">
    <Percentage />
  </div>
</template>

<script>
import GSAP from 'gsap'

import Percentage from './../Percentage/Percentage.vue'

export default {
  name: 'Loader',
  components: {
    Percentage,
  },

  data() {
    return {
      loading: false,
    }
  },

  methods: {
    start() {
      this.loading = true
    },

    async finish() {
      await GSAP.to('.container-loader', {
        height: 0,
        duration: 0.7,
      })
      this.loading = false
    },
  },
}
</script>

<style lang="scss" scoped>
.container-loader {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999999;
  background-color: $main-color;
}
</style>
