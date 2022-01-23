<template>
  <div>
    <Header :defaultStyle="false" />
    <slice-zone type="home" queryType="single" />
    <Button :primary="false" buttonText="blabla"/>
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'

import Header from './../partials/Header/Header.vue'
import Button from './../components/Button/Button.vue'

export default {
  components: {
    SliceZone,
    Header,
    Button,
  },

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 4600)
    })
  },
}
</script>
