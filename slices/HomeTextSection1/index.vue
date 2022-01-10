<template>
  <section class="section--home-section1">
    <prismic-rich-text
      :field="slice.primary.title"
      class="title--home-section1"
    />
    <div class="p--home-section1">
      <prismic-rich-text :field="slice.primary.homeSection1P1" />
      <prismic-rich-text :field="slice.primary.homeSection1P2" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeTextSection1',
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
.section--home-section1 {
  color: $main-color;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 70px 20px;
  align-items: center;

  @media screen and (min-width: $responsive--mobile-min) and (max-width: $responsive--mobile-max) {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: $responsive--tablet-min) and (max-width: $responsive--tablet-max) {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: $responsive--desktop-large-min) {
    grid-template-columns: 400px 400px;
    justify-content: center;
  }

  .p--home-section1 {
    display: flex;
    flex-direction: column;

    div {
      margin: 20px;

      @media screen and (min-width: $responsive--mobile-min) and (max-width: $responsive--mobile-max) {
        margin: 20px 0;
      }

      @media screen and (min-width: $responsive--tablet-min) and (max-width: $responsive--tablet-max) {
        margin: 20px 0;
      }
    }
  }
}
</style>
