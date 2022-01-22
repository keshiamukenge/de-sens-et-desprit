import MyComponent from '../../../../slices/HomeSectionContact';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HomeSectionContact'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"home_section_contact","items":[],"primary":{"title":[{"type":"heading1","text":"Exploit robust convergence","spans":[]}],"description":[{"type":"paragraph","text":"Nulla cillum velit laboris qui et ex tempor in nulla reprehenderit in reprehenderit.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
