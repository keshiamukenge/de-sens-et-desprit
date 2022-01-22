<template>
  <div class="header--container-items">
    <NuxtLink
      to="/"
      class="link"
      @mouseenter="hover.value = true"
      @mouseleave="hover.value = false"
    >
      <prismic-rich-text :field="slice.primary.acceuilItem" class="main-item" />
      <LinksAnimation :hover="hover.value" />
    </NuxtLink>
    <NuxtLink to="/Prestations" class="link">
      <prismic-rich-text
        :field="slice.primary.prestationsItem"
        class="main-item"
        @mouseenter="activeValue"
        @mouseleave="inactiveValue"
      />
      <LinksAnimation />
    </NuxtLink>
    <NuxtLink to="/Prestations/Lumiere-pulsee" class="link">
      <prismic-rich-text
        :field="slice.primary.lumiereHeaderItem"
        class="main-item"
      />
      <LinksAnimation />
    </NuxtLink>
    <NuxtLink to="/Abonnements" class="link">
      <prismic-rich-text
        :field="slice.primary.abonnementsItem"
        class="main-item"
      />
      <LinksAnimation />
    </NuxtLink>
    <NuxtLink to="/Bonscadeaux" class="link">
      <prismic-rich-text :field="slice.primary.BonsItem" class="main-item" />
      <LinksAnimation />
    </NuxtLink>
    <!-- <button>
      <prismic-rich-text :field="slice.primary.buttonRdvContent" />
    </button> -->
    <SubHeader :active="active" />
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'

import LinksAnimation from './../../components/animations/LinksAnimation/LinksAnimation.vue'
import SubHeader from './../../partials/Header/components/SubHeader/SubHeader.vue'

export default {
  name: 'Header',

  components: {
    LinksAnimation,
    SubHeader,
  },

  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },

  data() {
    return {
      hover: ref(false),
      subMenu: ref(null),
      active: ref(false),
    }
  },

  methods: {
    activeValue() {
      this.active.value = true
    },

    inactiveValue() {
      this.active.value = false
    },
  },
}
</script>

<style lang="scss" scoped>
.link {
  margin: 0 20px;
}
</style>
