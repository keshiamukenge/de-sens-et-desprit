<template>
  <div>
    <prismic-rich-text :field="slice.primary.CatTitle" />
    <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
      <prismic-link :field="item.linkCat">
        <prismic-rich-text :field="item.TextCat" class="footer-link" />
      </prismic-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterLinks',
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
  width: 150px;
  margin-right: 50px;
  box-sizing: border-box;

  h4 {
    color: $white-color;

    &::after {
      background-color: $white-color;
    }
  }

  .footer-link {
    color: $white-color;
  }
}
</style>
