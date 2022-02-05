<template>
  <footer>
    <DefaultSvg
      :width="17"
      :height="43"
      :icon-color="whiteColor"
      viewbox="0 0 17 43"
    >
      <Logo />
    </DefaultSvg>
    <slice-zone type="footerlinks" queryType="repeat" uid="horaires" />
    <slice-zone type="footerlinks" queryType="repeat" uid="coordonnees" />
    <slice-zone type="footerlinks" queryType="repeat" uid="institut" />
    <slice-zone type="FooterNewsLetter" queryType="single" />
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
  display: grid;
  grid-template-columns: 10% 20% 20% 20% 30%;
  color: $white-color;
  justify-content: space-between;
  padding: 80px 92px;
  box-sizing: border-box;
}
</style>
