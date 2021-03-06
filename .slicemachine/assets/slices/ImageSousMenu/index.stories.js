import MyComponent from '../../../../slices/ImageSousMenu';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ImageSousMenu'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"image_sous_menu","items":[],"primary":{"img":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587613865763-4b8b0d19e8ab?w=900&h=500&fit=crop"},"imgText":[{"type":"paragraph","text":"Esse culpa voluptate tempor aliqua est laborum cupidatat magna nisi proident anim in qui. Veniam fugiat eiusmod esse ex non in eu elit exercitation consectetur proident cillum.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
