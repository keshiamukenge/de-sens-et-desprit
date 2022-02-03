<template>
  <div>
    <Header :defaultStyle="false" />
    <slice-zone type="home" queryType="single" />
    
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'

import Header from './../partials/Header/Header.vue'


export default {
  components: {
    SliceZone,
    Header,
  },

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 4600)
    })
  },
}
</script>
