import MyComponent from '../../../../slices/SubHeader';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SubHeader'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"sub_header","items":[{"subHeaderCatTitle":[{"type":"paragraph","text":"Nostrud proident ipsum officia incididunt aute exercitation deserunt reprehenderit elit ipsum enim qui exercitation non. Non qui qui proident cupidatat est proident anim culpa mollit esse magna do minim.","spans":[]}],"subHeaderLink":{"link_type":"Web","url":"https://slicemachine.dev"}},{"subHeaderCatTitle":[{"type":"paragraph","text":"Nostrud pariatur sint aliquip fugiat velit et sunt ipsum.","spans":[]}],"subHeaderLink":{"link_type":"Web","url":"http://google.com"}},{"subHeaderCatTitle":[{"type":"paragraph","text":"Cillum eiusmod ut commodo quis ullamco consectetur dolore velit magna aute.","spans":[]}],"subHeaderLink":{"link_type":"Web","url":"http://twitter.com"}},{"subHeaderCatTitle":[{"type":"paragraph","text":"Id nisi pariatur nostrud enim.","spans":[]}],"subHeaderLink":{"link_type":"Web","url":"https://prismic.io"}}],"primary":{"subHeaderPrestaCatTitle":[{"type":"heading4","text":"Innovate cutting-edge supply-chains","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
