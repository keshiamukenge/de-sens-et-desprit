import MyComponent from '../../../../slices/HomeSectionPresta';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HomeSectionPresta'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"home_section_presta","items":[{"imagePresta":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547082299-de196ea013d6?w=900&h=500&fit=crop"},"prestaCat":[{"type":"heading3","text":"Strategize collaborative solutions","spans":[]}]},{"imagePresta":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278038-6bebbd4d7b72?w=900&h=500&fit=crop"},"prestaCat":[{"type":"heading3","text":"Embrace global communities","spans":[]}]},{"imagePresta":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=900&h=500&fit=crop"},"prestaCat":[{"type":"heading3","text":"Syndicate cross-platform systems","spans":[]}]}],"primary":{"title":[{"type":"heading2","text":"Facilitate clicks-and-mortar initiatives","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
