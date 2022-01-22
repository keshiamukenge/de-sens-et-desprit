import MyComponent from '../../../../slices/MegaMenuImg';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/MegaMenuImg'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"mega_menu_img","items":[],"primary":{"SubHeaderImg":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1579931794097-0ad001e51edb?w=900&h=500&fit=crop"},"SubHeaderImgText":[{"type":"paragraph","text":"Excepteur dolor cupidatat dolore reprehenderit sunt id esse.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
