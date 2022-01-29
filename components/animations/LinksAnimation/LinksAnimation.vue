<template>
  <NuxtLink
    :to="prop.pathLink"
    :class="prop.classLink"
    @mouseenter="slideIn"
    @mouseleave="slideOut"
  >
    <slot></slot>
    <span class="line" ref="line"></span>
  </NuxtLink>
</template>

<script>
import { ref } from '@vue/reactivity'
import GSAP from 'gsap'

export default {
  props: {
    pathLink: {
      default: '',
      type: String,
    },

    classLink: {
      default: null,
      type: String,
    },

    content: {
      default: null,
      type: HTMLElement,
    },
  },

  data() {
    return {
      line: ref(null),
      prop: this.$props,
    }
  },

  mounted() {
    this.line.value = this.$refs.line
  },

  methods: {
    slideIn() {
      GSAP.to('.line', {
        x: `100%`,
        duration: 0.7,
        backgroundColor: 'red',
        onComplete: () => {
          this.slideOut()
        },
      })
    },

    slideOut() {
      GSAP.to('.line', {
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
    margin-top: 5px;
  }
}
</style>
