<template>
  <div class="header--container-items">
    <NuxtLink
      to="/"
      class="link"
      @mouseenter="hover.value = true"
      @mouseleave="hover.value = false"
    >
      <prismic-rich-text :field="slice.primary.acceuilItem" />
      <LinksAnimation :hover="hover.value" />
    </NuxtLink>
    <NuxtLink to="/Prestations" class="link">
      <prismic-rich-text :field="slice.primary.prestationsItem" />
      <LinksAnimation />
    </NuxtLink>
    <NuxtLink to="/Abonnements" class="link">
      <prismic-rich-text :field="slice.primary.abonnementsItem" />
      <LinksAnimation />
    </NuxtLink>
    <NuxtLink to="/Bonscadeaux" class="link">
      <prismic-rich-text :field="slice.primary.BonsItem" />
      <LinksAnimation />
    </NuxtLink>
    <!-- <button>
      <prismic-rich-text :field="slice.primary.buttonRdvContent" />
    </button> -->
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'

import LinksAnimation from './../../components/animations/LinksAnimation/LinksAnimation.vue'

export default {
  name: 'Header',

  components: {
    LinksAnimation,
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
    }
  },
}
</script>

<style scoped>
.link {
  margin: 0 20px;
}
</style>
