<template>
  <NuxtLink ref="links" :to="to" class="link">
    <div ref="container" @mouseenter="slideIn" @mouseleave="slideOut">
      <slot />
      <span ref="line" class="line"></span>
    </div>
  </NuxtLink>
</template>

<script>
import GSAP from 'gsap'
import { ref } from '@vue/reactivity'

import { colors } from './../../../theme/colors/colors'

export default {
  props: {
    to: {
      default: '',
      type: String,
      require: true,
    },
    lineColor: {
      default: colors.white,
      type: String,
      require: false,
    },
    bottom: {
      default: '-10%',
      type: String,
      require: false,
    },
  },

  data() {
    return {
      line: ref(null),
      state: this.$store.getters,
    }
  },

  mounted() {
    this.line.value = this.$refs.line
    this.line.value.style.bottom = this.$props.bottom
  },

  methods: {
    slideIn() {
      GSAP.to(this.line.value, {
        x: `0%`,
        backgroundColor: this.$props.lineColor,
        duration: 0.7,
      })
    },

    slideOut() {
      GSAP.to(this.line.value, {
        x: `-101%`,
        duration: 0.7,
        backgroundColor: this.$props.lineColor,
        onComplete: () => {
          this.line.value.style.transform = 'translate(-101%, 0px)'
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  height: 100%;
  position: relative;

  .link {
    position: relative;
    z-index: 5;
    overflow: hidden;

    .line {
      height: 1px;
      width: 100%;
      display: inline-block;
      position: absolute;
      bottom: -10%;
      z-index: 999;
      transform: translate(-101%, 0);
      background-color: $white-color;
    }
  }
}
</style>
