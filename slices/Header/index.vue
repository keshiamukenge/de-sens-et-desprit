<template>
  <div class="header--container-items">
    <LinksAnimation to="/">
      <prismic-rich-text :field="slice.primary.acceuilItem" class="main-item" />
    </LinksAnimation>
    <LinksAnimation to="/Prestations" class="link">
      <prismic-rich-text
        :field="slice.primary.prestationsItem"
        class="main-item"
        @mouseenter="onEnter"
        @mouseleave="onLeave"
      />
    </LinksAnimation>
    <LinksAnimation to="/Prestations/Lumiere-pulsee" class="link">
      <prismic-rich-text
        :field="slice.primary.lumiereHeaderItem"
        class="main-item"
      />
    </LinksAnimation>
    <LinksAnimation to="/Abonnements" class="link">
      <prismic-rich-text
        :field="slice.primary.abonnementsItem"
        class="main-item"
      />
    </LinksAnimation>
    <LinksAnimation to="/Bonscadeaux" class="link">
      <prismic-rich-text :field="slice.primary.BonsItem" class="main-item" />
    </LinksAnimation>
  </div>
</template>

<script>
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
