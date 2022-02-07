<template>
  <div class="header--container-items">
    <Link to="/">
      <prismic-rich-text :field="slice.primary.acceuilItem" class="main-item" />
    </Link>
    <Link to="/Prestations" class="link">
      <prismic-rich-text
        :field="slice.primary.prestationsItem"
        class="main-item"
        @mouseenter="onEnter"
        @mouseleave="onLeave"
      />
    </Link>
    <Link to="/Prestations/Lumiere-pulsee" class="link">
      <prismic-rich-text
        :field="slice.primary.lumiereHeaderItem"
        class="main-item"
      />
    </Link>
    <Link to="/Abonnements" class="link">
      <prismic-rich-text
        :field="slice.primary.abonnementsItem"
        class="main-item"
      />
    </Link>
    <Link to="/Bonscadeaux" class="link">
      <prismic-rich-text :field="slice.primary.BonsItem" class="main-item" />
    </Link>
  </div>
</template>

<script>
import Link from '../../components/animations/Link/Link.vue'

export default {
  name: 'Header',

  components: {
    Link,
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
