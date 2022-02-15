<template>
  <div>
    <div v-if="defaultStyle">
      <HeaderDefault></HeaderDefault>
    </div>
    <div v-else>
      <HeaderVariation></HeaderVariation>
    </div>
  </div>
</template>

<script>
import HeaderDefault from './components/HeaderDefault/HeaderDefault'
import HeaderVariation from './components/HeaderVariation/HeaderVariation'

export default {
  components: {
    HeaderDefault,
    HeaderVariation,
  },

  props: {
    defaultStyle: {
      default: true,
      type: Boolean,
    },
  },
}
</script>

<style></style>
