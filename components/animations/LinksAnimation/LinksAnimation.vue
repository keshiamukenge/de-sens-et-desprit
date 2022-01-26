<template>
  <div @mouseenter="slideIn" @mouseleave="slideOut">
    <span ref="line"></span>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import GSAP from 'gsap'

export default {
  props: {
    animation: {
      default: null,
      type: Function,
    },
  },

  data() {
    return {
      line: ref(null),
    }
  },

  mounted() {
    this.line.value = this.$refs.line
  },

  methods: {
    slideIn() {
      GSAP.to(this.line.value, {
        x: `100%`,
        duration: 0.7,
      })
    },

    slideOut() {
      GSAP.to(this.line.value, {
        x: `201%`,
        duration: 0.7,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  height: fit-content;

  span {
    width: 100%;
    height: 1px;
    transform: translateX(-101%);
    background-color: $main-color;
    display: block;
  }
}
</style>
