<template>
  <div
    ref="containerSubHeader"
    class="container-mega-menu"
    :class="{
      active: state.onPrestaLink || state.onSubheader,
      inactive: !state.onPrestaLink && !state.onSubheader,
    }"
    @mouseleave="onLeave"
    @mouseenter="onEnter"
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
      state: this.$store.getters,
      scrollYLimit: 100,
    }
  },

  methods: {
    onEnter() {
      this.$store.dispatch('headerColorWhiteAction')
      this.$store.dispatch('onSubHeaderAction')
    },

    onLeave() {
      if (window.scrollY < this.scrollYLimit) {
        this.$store.dispatch('headerColorTransparentAction')
        this.$store.dispatch('outSubHeaderAction')
      } else {
        this.$store.dispatch('outSubHeaderAction')
        this.$store.dispatch('headerColorWhiteAction')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.container-mega-menu {
  background-color: $white-color;
  width: 100%;
  height: fit-content;
  position: absolute;
  z-index: 99;
  top: 70px;
  left: 0;
  right: 0;
  padding: 24px 92px 0 92px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 17% 17% 17% 17% 32%;
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);

  .container-cat {
    margin-right: 40px;
    height: fit-content;
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
