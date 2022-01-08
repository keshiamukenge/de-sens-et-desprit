<template>
  <span ref="line" :hover="hover"></span>
</template>

<script>
import { ref } from '@vue/reactivity'
import GSAP from 'gsap'

export default {
  props: {
    hover: {
      default: false,
      type: Boolean,
    },
  },

  data() {
    return {
      line: ref(null),
    }
  },

  watch: {
    animate() {
      if (this.$props.hover) {
        this.slideIn()
      } else {
        this.slideOut()
      }
    },
  },

  mounted() {
    this.line.value = this.$refs.line
  },

  methods: {
    slideIn() {
      GSAP.to(this.line.value, {
        x: `100%`,
        duration: 0.3,
      })
    },

    slideOut() {
      GSAP.to(this.line.value, {
        x: `201%`,
        duration: 0.3,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
span {
  width: 100%;
  height: 1px;
  transform: translateX(-101%);
  background-color: $main-color;
  display: block;
}
</style>
