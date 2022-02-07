<template>
  <NuxtLink ref="links" :to="to" class="link">
    <slot />
    <span class="line"></span>
  </NuxtLink>
</template>

<script>
import GSAP from 'gsap'
/* import { ref } from '@vue/reactivity' */

export default {
  props: {
    to: {
      default: '',
      type: String,
      require: true,
    },
  },

  methods: {
    slideIn(line) {
      GSAP.to(line, {
        x: `0%`,
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

  .link {
    position: relative;
    z-index: 5;
    color: white;
    overflow: hidden;

    .line {
      height: 1px;
      width: 100%;
      display: inline-block;
      position: absolute;
      bottom: 5px;
      background-color: $white-color;
      transform: translate(-101%, 0);
    }

    /* &:hover {
      .line {
        transform: translate(0%, 0);
        transition: 300ms linear;
      }
    } */
  }
}
</style>
