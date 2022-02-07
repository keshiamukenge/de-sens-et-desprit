<template>
  <div
    class="container-mega-menu"
    :class="{
      active: active.hover,
      inactive: !active.hover,
    }"
  >
    <slice-zone
      type="mega_menu"
      queryType="repeat"
      uid="sous-menu-soins"
      class="container-cat"
    />
    <slice-zone
      type="mega_menu"
      queryType="repeat"
      uid="sous-menu-massages"
      class="container-cat"
    />
    <slice-zone
      type="mega_menu"
      queryType="repeat"
      uid="sous-menu-epilation"
      class="container-cat"
    />
    <slice-zone
      type="mega_menu"
      queryType="repeat"
      uid="sous-menu-beaute"
      class="container-cat"
    />
    <slice-zone type="subheaderimg" queryType="single" />
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
  components: {
    SliceZone,
  },

  data() {
    return {
      active: this.$store.getters,
    }
  },
}
</script>

<style lang="scss" scoped>
.container-mega-menu {
  background-color: $white-color;
  width: 100%;
  height: fit-content;
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  padding: 24px 92px 36px 92px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 17% 17% 17% 17% 32%;
  grid-template-rows: 230px;
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);

  .container-cat {
    margin-right: 40px;
  }
}

.active {
  animation: downSubHeader 0.5s ease-in-out;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

  @keyframes downSubHeader {
    from {
      clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    }
    to {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
  }
}

.inactive {
  animation: upSubHeader 0.5s ease-in-out;
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);

  @keyframes upSubHeader {
    from {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
    to {
      clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    }
  }
}
</style>
