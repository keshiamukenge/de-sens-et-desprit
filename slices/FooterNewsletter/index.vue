<template>
  <div>
    <prismic-rich-text :field="slice.primary.newsletterTitle" />
    <input />
    <prismic-link :field="slice.primary.InstagramLink">
      <prismic-rich-text :field="slice.primary.InstagramTitle" />
    </prismic-link>
    <prismic-link :field="slice.primary.facebookLink">
      <prismic-rich-text :field="slice.primary.facebookTitle" />
    </prismic-link>
  </div>
</template>

<script>
export default {
  name: 'FooterNewsletter',
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
div {
  font-weight: 200;

  input {
    width: 100%;
    height: 20px;
    margin-bottom: 60px;
  }

  a {
    color: $white-color;
    margin-right: 15px;
  }
}
</style>
