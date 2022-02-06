<template>
  <footer>
    <div class="footer-container-logo">
      <DefaultSvg
        :width="17"
        :height="43"
        :icon-color="whiteColor"
        viewbox="0 0 17 43"
      >
        <Logo />
      </DefaultSvg>
    </div>
    <slice-zone type="footerlinks" queryType="single" class="footer-content" />
  </footer>
</template>

<script>
import SliceZone from 'vue-slicezone'

import Logo from './../../components/assets/Svg/Logo/Logo.vue'
import DefaultSvg from './../../components/assets/Svg/DefaultSvg.vue'
import { colors } from './../../theme/colors/colors'

export default {
  components: {
    SliceZone,
    Logo,
    DefaultSvg,
  },

  data() {
    return {
      whiteColor: colors.white,
    }
  },
}
</script>

<style lang="scss" scoped>
footer {
  background-color: $main-color;
  width: 100vw;
  height: fit-content;
  padding: 80px 92px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;

  .footer-container-logo {
    width: fit-content;
    margin-right: 8%;
  }

  .footer-content {
    width: 100%;
  }
}
</style>
