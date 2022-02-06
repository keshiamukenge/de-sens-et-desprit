<template>
  <div>
    <Header />
    <slice-zone type="cgv" queryType="single" uid="cgv" />
    <Footer />
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'

import Header from '../partials/Header/Header.vue'
import Footer from '../partials/Footer/Footer.vue'

export default {
  components: {
    SliceZone,
    Header,
    Footer,
  },
}
</script>

<style></style>
