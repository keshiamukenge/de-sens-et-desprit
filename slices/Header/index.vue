<template>
  <div class="header--container-items">
    <NuxtLink to="/" class="link">
      <prismic-rich-text :field="slice.primary.acceuilItem" class="main-item" />
    </NuxtLink>
    <NuxtLink to="/Prestations" class="link">
      <prismic-rich-text
        :field="slice.primary.prestationsItem"
        class="main-item"
        @mouseenter="onEnter"
        @mouseleave="onLeave"
      />
    </NuxtLink>
    <NuxtLink to="/Prestations/Lumiere-pulsee" class="link">
      <prismic-rich-text
        :field="slice.primary.lumiereHeaderItem"
        class="main-item"
      />
    </NuxtLink>
    <NuxtLink to="/Abonnements" class="link">
      <prismic-rich-text
        :field="slice.primary.abonnementsItem"
        class="main-item"
      />
    </NuxtLink>
    <NuxtLink to="/Bonscadeaux" class="link">
      <prismic-rich-text :field="slice.primary.BonsItem" class="main-item" />
    </NuxtLink>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'

import LinksAnimation from './../../components/animations/LinksAnimation/LinksAnimation.vue'


export default {
  name: 'Header',
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },

  methods: {
    onEnter() {
      this.$store.dispatch('onMouseEnterAction')
    },

    onLeave() {
      this.$store.dispatch('onMouseLeaveAction')
    },
  },
}
</script>

<style lang="scss" scoped>
.link {
  margin: 0 20px;
}
</style>
