<template>
  <section>
    <div>
      <prismic-rich-text
        :field="slice.primary.TitlePage"
        class="container-title"
      />
      <prismic-rich-text
        :field="slice.primary.ContentPage"
        class="container-content"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'TextPage',
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
section {
  width: 100%;
  height: fit-content;
  margin-top: 100px;
  box-sizing: border-box;

  div {
    padding: 0 10%;

    .container-title {
      margin-bottom: 50px;
    }

    .container-content {
      margin-bottom: 150px;
    }
  }
}
</style>
