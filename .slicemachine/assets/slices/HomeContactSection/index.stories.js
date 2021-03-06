import MyComponent from '../../../../slices/HomeContactSection';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HomeContactSection'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"home_contact_section","items":[],"primary":{"homeContactTitle":[{"type":"heading2","text":"Enable e-business infrastructures","spans":[]}],"homeContactAdress":[{"type":"paragraph","text":"Lorem exercitation sit cillum amet tempor duis nostrud non laboris. Ad incididunt mollit id consectetur anim. Qui laboris occaecat ad labore duis incididunt elit.","spans":[]}],"homeContactHours":[{"type":"paragraph","text":"Lorem velit labore dolore quis non elit occaecat cillum. Excepteur esse exercitation irure dolore. In mollit officia laboris mollit quis do proident occaecat sunt enim minim officia.","spans":[]}],"homeContactPhone":[{"type":"paragraph","text":"Id nostrud do minim laboris reprehenderit aliqua et mollit ea id. Nulla nostrud labore non. Velit culpa commodo adipisicing voluptate aliqua pariatur sit esse occaecat esse cillum.","spans":[]}],"homeContactMail":[{"type":"paragraph","text":"Non labore duis ad tempor quis sint in est reprehenderit.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
