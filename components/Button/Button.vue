<template>
  <div
    class="button"
    @mouseenter="onEnter"
    @mouseleave="onLeave"
    :class="{ primary: primary, secondary: !primary }"
  >
    <a href="#">
      {{ content }}
    </a>
    <div ref="buttonBackground" class="button-background"></div>
  </div>
</template>

<script>
import GSAP from 'gsap'

export default {
  props: {
    content: {
      type: String,
      default: 'Prendre RDV',
      require: false,
    },
    primary: {
      type: Boolean,
      default: true,
      require: false,
    },
  },

  methods: {
    onEnter() {
      GSAP.to(this.$refs.buttonBackground, {
        bottom: `${0}%`,
        duration: 0.5,
      })
    },

    onLeave() {
      GSAP.to(this.$refs.buttonBackground, {
        bottom: `${-100}%`,
        duration: 0.5,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  width: 120px;
  height: 33px;
  font-family: $secondary-font;
  position: relative;
  overflow: hidden;

  .button-background {
    width: 100%;
    height: 100%;
    z-index: 3;
  }

  a {
    width: 100%;
    height: 100%;
    padding-top: 9px;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    z-index: 5;
  }
}

.primary {
  background-color: transparent;
  border: 1px solid $main-color;

  &:hover {
    border: 1px solid $main-color;

    a {
      color: $white-color;
      transition: $transition;
    }
  }

  .button-background {
    background-color: $main-color;
    position: absolute;
    bottom: -100%;
    left: 0;
    right: 0;
  }

  a {
    color: $main-color;
  }
}

.secondary {
  border: 1px solid $white-color;

  &:hover {
    a {
      color: $main-color;
      transition: $transition;
    }
  }

  .button-background {
    background-color: $white-color;
    position: absolute;
    bottom: -100%;
    left: 0;
    right: 0;
  }

  a {
    color: $white-color;
  }
}
</style>
