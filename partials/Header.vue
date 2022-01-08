<template>
  <div>
      <img :src="$prismic.asLink(document.header_logo)" />
      <a href="#">{{ $prismic.asText(document.header_abonnements) }}</a>
      <a href="#">{{ $prismic.asText(document.header_accueil) }}</a>
      <a href="#">{{ $prismic.asText(document.header_bonscadeaux) }}</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      document: {},
    }
  },
  async fetch() {
    this.document = (await this.$prismic.api.getSingle('header')).data
  },
}
</script>

<style lang="scss" scoped>
    div{
        width: 500px;
        height: 200px;
        background-color: $secondary-color;
    }
</style>