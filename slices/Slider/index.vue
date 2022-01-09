<template>
  <section class="section--home-slider">
    <prismic-image :field="slice.primary.sliderImg1" />
    <prismic-image :field="slice.primary.sliderImg2" />
    <prismic-image :field="slice.primary.sliderImg3" />
    <prismic-image :field="slice.primary.sliderImg4" />
    <prismic-image :field="slice.primary.sliderImg5" />
  </section>
</template>

<script>
export default {
  name: 'Slider',
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
.section--home-slider {
  display: flex;
  transform: translateX(-130px);
  width: fit-content;

  img {
    width: 500px;
    height: 250px;
    object-fit: cover;
    margin: 0 30px;

    @media screen and (min-width: $responsive--mobile-min) and (max-width: $responsive--mobile-max) {
      width: 300px;
      height: 200px;
      transform: translateX(-87px);
      margin: 0 15px;
    }
  }
}
</style>
