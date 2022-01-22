<template>
  <header
    :class="{
      white: backgroundColor.value,
      transparent: !backgroundColor.value,
    }"
  >
    <div class="header--container-logo">
      <NuxtLink to="/">
        <DefaultSvg
          :width="17"
          :height="43"
          :icon-color="backgroundColor.value ? mainColor : whiteColor"
          viewbox="0 0 17 43"
        >
          <Logo />
        </DefaultSvg>
      </NuxtLink>
    </div>
    <slice-zone type="header" query-type="single" class="header--content" />
    <div class="header--container-icons-profile">
      <DefaultSvg
        :width="14"
        :height="18"
        :icon-color="backgroundColor.value ? mainColor : whiteColor"
        viewbox="0 0 14 18"
      >
        <IconUser />
      </DefaultSvg>
      <DefaultSvg
        :width="20"
        :height="18"
        :icon-color="backgroundColor.value ? mainColor : whiteColor"
        viewbox="0 0 20 18"
      >
        <IconCart />
      </DefaultSvg>
    </div>
  </header>
</template>

<script>
import SliceZone from 'vue-slicezone'
import { ref } from '@vue/reactivity'

import DefaultSvg from '../../components/assets/Svg/DefaultSvg.vue'
import Logo from '../../components/assets/Svg/Logo/Logo.vue'
import IconCart from '../../components/assets/Svg/Icons/Cart/IconCart.vue'
import IconUser from '../../components/assets/Svg/Icons/User/User.vue'
import { colors } from './../../theme/colors/colors'

export default {
  components: {
    SliceZone,
    DefaultSvg,
    Logo,
    IconCart,
    IconUser,
  },

  data() {
    return {
      mainColor: colors.main,
      whiteColor: colors.white,
      backgroundColor: ref(false),
      active: ref(false),
    }
  },

  mounted() {
    this.setBackgroundColor()
  },

  methods: {
    getScrollY() {
      const scrollY = window.scrollY

      if (scrollY < 50) {
        this.backgroundColor.value = false
      } else {
        this.backgroundColor.value = true
      }
    },

    setBackgroundColor() {
      window.addEventListener('scroll', () => {
        this.getScrollY()
      })
    },

    activeValue() {
      this.active.value = true
    },

    inactiveValue() {
      this.active.value = false
    },
  },
}
</script>

<style lang="scss">
header {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  width: 100vw;
  height: 70px;
  padding: 13px 50px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  .header--content {
    .header--container-logo {
      height: 100%;
      width: 12px;
    }

    .header--container-items {
      display: flex;
      align-items: center;
      height: 100%;
    }
  }

  .header--container-icons-profile {
    display: flex;
    align-items: center;
    width: 60px;
    justify-content: space-between;
    height: 100%;
  }
}

.white {
  background-color: $white-color;
  transition: $transition;

  .header--content {
    .main-item {
      display: flex;

      p {
        color: $main-color;
      }
    }
  }
}

.transparent {
  color: $white-color;
  background-color: transparent;
  transition: $transition;

  .header--content {
    .main-item {
      p {
        color: $white-color;
      }
    }
  }
}
</style>
