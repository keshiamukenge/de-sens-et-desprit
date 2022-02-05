<template>
  <div>
    <Header :defaultStyle="false" />
    <slice-zone type="home" queryType="single" />
    <Footer />
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'

import Header from './../partials/Header/Header.vue'
import Footer from './../partials/Footer/Footer.vue'

export default {
  components: {
    SliceZone,
    Header,
    Footer,
  },

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 4600)
    })
  },
}
</script>
