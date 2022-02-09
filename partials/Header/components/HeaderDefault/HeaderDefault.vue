<template>
  <header class="white">
    <div class="header--container-logo">
      <Link to="/">
        <DefaultSvg
          :width="17"
          :height="43"
          :icon-color="mainColor"
          viewbox="0 0 17 43"
        >
          <Logo />
        </DefaultSvg>
      </Link>
    </div>
    <slice-zone type="header" query-type="single" class="header--content" />
    <div class="header--container-icons-profile">
      <DefaultSvg
        :width="14"
        :height="18"
        :icon-color="mainColor"
        viewbox="0 0 14 18"
      >
        <IconUser />
      </DefaultSvg>
      <DefaultSvg
        :width="20"
        :height="18"
        :icon-color="mainColor"
        viewbox="0 0 20 18"
      >
        <IconCart />
      </DefaultSvg>
    </div>
    <SubHeader />
  </header>
</template>

<script>
import SliceZone from 'vue-slicezone'

import DefaultSvg from '../../../../components/assets/Svg/DefaultSvg.vue'
import Logo from '../../../../components/assets/Svg/Logo/Logo.vue'
import IconCart from '../../../../components/assets/Svg/Icons/Cart/IconCart.vue'
import IconUser from '../../../../components/assets/Svg/Icons/User/User.vue'
import Link from '../../../../components/animations/Link/Link.vue'
import SubHeader from './../SubHeader/SubHeader.vue'
import { colors } from './../../../../theme/colors/colors'

export default {
  components: {
    SliceZone,
    DefaultSvg,
    Logo,
    IconCart,
    IconUser,
    SubHeader,
    Link,
  },

  data() {
    return {
      mainColor: colors.main,
      whiteColor: colors.white,
    }
  },

  mounted() {
    this.$store.dispatch('headerColorWhiteAction')
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
  padding: 0px 92px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  .header--content {
    height: 100%;

    .header--container-logo {
      height: 100%;
      width: 12px;
    }

    .header--container-items {
      display: flex;
      align-items: center;
      height: 100%;
      box-sizing: border-box;

      .link {
        height: 100%;
      }
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
    .header-item {
      display: flex;

      p {
        color: $main-color;
      }
    }
  }
}
</style>
