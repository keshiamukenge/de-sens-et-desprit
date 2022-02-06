import MyComponent from '../../../../slices/TextPage';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TextPage'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_page","items":[],"primary":{"TitlePage":[{"type":"heading2","text":"Visualize back-end synergies","spans":[]}],"ContentPage":[{"type":"paragraph","text":"Deserunt adipisicing anim labore reprehenderit laboris ad sit nostrud enim dolore. Commodo dolor ullamco consequat eu mollit. Reprehenderit culpa voluptate ea incididunt nostrud adipisicing quis eu anim commodo Lorem non enim labore.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
