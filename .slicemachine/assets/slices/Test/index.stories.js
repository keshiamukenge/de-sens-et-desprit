import MyComponent from '../../../../slices/Test';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Test'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"test","items":[],"primary":{"title":[{"type":"heading1","text":"Enable cross-media functionalities","spans":[]}],"description":[{"type":"paragraph","text":"Anim qui reprehenderit aute laborum elit quis magna magna. Sunt incididunt consequat occaecat aliqua nulla exercitation in.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
