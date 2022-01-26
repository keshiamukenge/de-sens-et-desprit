<template>
  <div>
    <div v-if="defaultHeader.value">
      <HeaderDefault></HeaderDefault>
    </div>
    <div v-else>
      <HeaderVariation></HeaderVariation>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'

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

  data() {
    return {
      defaultHeader: ref(this.$props.defaultStyle),
    }
  },
}
</script>

<style lang="scss"></style>
