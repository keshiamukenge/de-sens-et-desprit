<template>
  <div class="container-subheader-img">
    <prismic-image :field="slice.primary.img" class="subheader-img" />
    <prismic-rich-text :field="slice.primary.imgText" />
  </div>
</template>

<script>
export default {
  name: 'ImageSousMenu',
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
.container-subheader-img {
  width: 100%;
  height: 70%;

  .subheader-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-bottom: 10px;
  }
}
</style>
