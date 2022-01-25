<template>
  <div
    class="container-mega-menu"
    :class="{
      active: active.value,
      inactive: !active.value,
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
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'
/* import { ref } from '@vue/reactivity' */

export default {
  components: {
    SliceZone,
  },

  props: {
    active: {
      default: false,
      type: Boolean,
    },
  },

  methods: {
    activeValue() {
      this.$props.active.value = true
    },

    inactiveValue() {
      this.$props.active.value = false
    },
  },
}
</script>

<style lang="scss" scoped>
.container-mega-menu {
  background-color: $white-color;
  width: 100vw;
  height: fit-content;
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  padding: 24px 0 36px 50px;
  box-sizing: border-box;
  display: flex;
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);

  .container-cat {
    margin-right: 100px;
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
