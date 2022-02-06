import MyComponent from '../../../../slices/Cgv';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Cgv'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"cgv","items":[],"primary":{"Title":[{"type":"paragraph","text":"Eu incididunt cupidatat non fugiat minim ad cillum aliqua officia.","spans":[]}],"Content":[{"type":"paragraph","text":"Enim ex velit dolor duis cupidatat velit nisi magna dolore sit est. Qui labore pariatur ullamco aliquip proident anim ut excepteur pariatur dolore. Non cupidatat est ut culpa laboris mollit elit enim magna aute proident.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
