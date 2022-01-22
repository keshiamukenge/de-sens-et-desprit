import MyComponent from '../../../../slices/HomeSectionPrestaCat';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HomeSectionPrestaCat'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"home_section_presta_cat","items":[{"soinsSubCat":[{"type":"paragraph","text":"Labore fugiat commodo velit proident excepteur. Velit consequat do aliquip eiusmod ex.","spans":[]}]},{"soinsSubCat":[{"type":"paragraph","text":"Ea sit consequat ipsum non.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
