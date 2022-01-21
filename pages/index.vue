<template>
  <div>
    <Header />
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
}
</script>
