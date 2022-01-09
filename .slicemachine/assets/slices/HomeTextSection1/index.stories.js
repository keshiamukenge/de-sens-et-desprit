import MyComponent from '../../../../slices/HomeTextSection1';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HomeTextSection1'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"home_text_section1","items":[],"primary":{"title":[{"type":"heading2","text":"Harness best-of-breed systems","spans":[]}],"homeSection1P1":[{"type":"paragraph","text":"Sunt qui tempor ut fugiat et laborum non eu et aliquip tempor laboris minim cupidatat.","spans":[]}],"homeSection1P2":[{"type":"paragraph","text":"Voluptate culpa ipsum tempor consequat nulla mollit eiusmod cillum sint cillum cillum magna ipsum. Amet nulla tempor nostrud nostrud laborum cillum.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
