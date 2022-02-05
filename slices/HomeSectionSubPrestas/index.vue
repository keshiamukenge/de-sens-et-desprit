<template>
  <div>
    <div
      v-for="(item, i) in slice.items"
      :key="`slice-item-${i}`"
      :class="`subCat${i}`"
    >
      <prismic-link :field="item.linkPrestasSubCat" class="subcat-link">
        <prismic-rich-text
          :field="item.textPrestasSubCat"
          class="subcat-text"
        />
      </prismic-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSectionSubPrestas',
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
  height: fit-content;
  width: 100%;
  color: $main-color;
  margin: 5px 0;

  .subcat-link {
    overflow: hidden;

    /* .subcat-text {
      transform: translateY(-20px);
    } */
  }
}
</style>
