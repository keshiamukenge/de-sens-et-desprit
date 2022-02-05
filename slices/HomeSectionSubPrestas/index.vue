<template>
  <div>
    <ul
      v-for="(item, i) in slice.items"
      :key="`slice-item-${i}`"
      :class="`subCat${i}`"
    >
      <prismic-link :field="item.linkPrestasSubCat">
        <prismic-rich-text :field="item.textPrestasSubCat" />
      </prismic-link>
    </ul>
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

<style scoped>
div {
  height: 100px;
  width: 100%;
  color: black;
}
</style>
