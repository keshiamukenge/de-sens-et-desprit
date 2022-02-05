import MyComponent from '../../../../slices/FooterNewsletter';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/FooterNewsletter'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"footer_newsletter","items":[],"primary":{"newsletterTitle":[{"type":"heading4","text":"Expedite world-class e-commerce","spans":[]}],"InstagramLink":{"link_type":"Web","url":"http://google.com"},"InstagramTitle":[{"type":"paragraph","text":"Nisi veniam ipsum exercitation aliquip in nostrud sint officia ut adipisicing id magna ipsum.","spans":[]}],"facebookLink":{"link_type":"Web","url":"http://twitter.com"},"facebookTitle":[{"type":"paragraph","text":"Eu et ullamco consequat qui labore. Aliquip sint sint cupidatat. Officia exercitation ex reprehenderit nostrud esse tempor excepteur cillum aliquip officia.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
