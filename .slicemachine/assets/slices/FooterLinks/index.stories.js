import MyComponent from '../../../../slices/FooterLinks';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/FooterLinks'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"footer_links","items":[{"linkCat":{"link_type":"Web","url":"https://prismic.io"},"TextCat":[{"type":"paragraph","text":"Do laborum est adipisicing anim aliqua consectetur est qui sint officia anim exercitation ad. Laborum culpa consequat proident dolor consectetur labore do tempor dolore labore nulla anim non proident. Dolore laboris non aute.","spans":[]}]},{"linkCat":{"link_type":"Web","url":"http://twitter.com"},"TextCat":[{"type":"paragraph","text":"Occaecat exercitation id pariatur.","spans":[]}]}],"primary":{"CatTitle":[{"type":"heading4","text":"Implement web-enabled niches","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
