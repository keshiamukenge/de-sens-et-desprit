<template>
  <div>
    <slice-zone type="home" queryType="single" />
    <slice-zone type="header" queryType="single" />
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
  components: {
    SliceZone,
  },
}
</script>
