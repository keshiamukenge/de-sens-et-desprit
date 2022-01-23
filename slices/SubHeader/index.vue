<template>
  <div>
    <prismic-rich-text
      :field="slice.primary.subHeaderPrestaCatTitle"
      class="cat-title"
    />
    <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
      <prismic-link :field="item.subHeaderLink" class="sous-cat-link">
        <prismic-rich-text :field="item.subHeaderCatTitle" />
      </prismic-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubHeader',
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
.cat-title {
  h4 {
    margin-bottom: 10px;
  }
}

.sous-cat-link {
  color: $main-color;
  font-style: italic;
}
</style>
