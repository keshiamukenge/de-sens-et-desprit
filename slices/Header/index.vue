<template>
  <div ref="containerLinks" class="header--container-items">
    <Link
      ref="link"
      to="/"
      :lineColor="state.white ? mainColor : whiteColor"
      :bottom="bottom"
    >
      <prismic-rich-text
        :field="slice.primary.acceuilItem"
        class="header-item"
      />
    </Link>
    <Link ref="link" to="/Prestations" :lineColor="mainColor" :bottom="bottom">
      <prismic-rich-text
        :field="slice.primary.prestationsItem"
        class="header-item"
        @mouseenter="onEnter"
        @mouseleave="onLeave"
      />
    </Link>
    <Link
      ref="link"
      to="/Prestations/Lumiere-pulsee"
      :lineColor="state.white ? mainColor : whiteColor"
      :bottom="bottom"
    >
      <prismic-rich-text
        :field="slice.primary.lumiereHeaderItem"
        class="header-item"
      />
    </Link>
    <Link
      ref="link"
      to="/Abonnements"
      :lineColor="state.white ? mainColor : whiteColor"
      :bottom="bottom"
    >
      <prismic-rich-text
        :field="slice.primary.abonnementsItem"
        class="header-item"
      />
    </Link>
    <Link
      ref="link"
      to="/Bonscadeaux"
      :lineColor="state.white ? mainColor : whiteColor"
      :bottom="bottom"
    >
      <prismic-rich-text :field="slice.primary.BonsItem" class="header-item" />
    </Link>
  </div>
</template>

<script>
import Link from '../../components/animations/Link/Link.vue'
import { colors } from './../../theme/colors/colors'

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

  data() {
    return {
      state: this.$store.getters,
      scrollYLimit: 100,
      mainColor: colors.main,
      whiteColor: colors.white,
      bottom: '30%',
    }
  },

  methods: {
    onEnter() {
      this.$store.dispatch('headerColorWhiteAction')
      this.$store.dispatch('onPrestaLinkAction')
    },

    onLeave() {
      if (window.scrollY < this.scrollYLimit) {
        this.$store.dispatch('headerColorTransparentAction')
        this.$store.dispatch('outPrestaLinkAction')
      } else {
        this.$store.dispatch('outPrestaLinkAction')
        this.$store.dispatch('headerColorWhiteAction')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.link {
  margin: 0 20px;

  .header-item {
    height: 100%;
    padding: 21px 0;
    box-sizing: border-box;
  }
}
</style>
