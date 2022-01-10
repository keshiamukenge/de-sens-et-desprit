<template>
  <section class="section--home-hero">
    <prismic-image
      :field="slice.primary.homeHeroVideo"
      class="section--home-hero-video"
    />
    <prismic-rich-text
      :field="slice.primary.HomeH1"
      class="section--home-hero-h1"
    />
    <prismic-rich-text
      :field="slice.primary.HomeHeroBaseline"
      class="section--home-hero-baseline"
    />
  </section>
</template>

<script>
export default {
  name: 'HomeHeroVideo',
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.section--home-hero {
  width: 100%;
  height: 100vh;
  padding: 0 80px;
  z-index: 1;

  @media screen and (min-width: $responsive--mobile-min) and (max-width: $responsive--mobile-max) {
    padding: 0 20px;
  }

  @media screen and (min-width: $responsive--tablet-min) and (max-width: $responsive--tablet-max) {
    padding: 0 20px;
  }

  .section--home-hero-video {
    width: 100vw;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }

  .section--home-hero-h1 {
    padding-top: 250px;
    margin-bottom: 50px;

    @media screen and (min-width: $responsive--mobile-min) and (max-width: $responsive--mobile-max) {
      padding-top: 120px;
      width: 230px;
    }
  }

  .section--home-hero-baseline {
    @media screen and (min-width: $responsive--mobile-min) and (max-width: $responsive--mobile-max) {
      width: 220px;
    }
  }
}
</style>
