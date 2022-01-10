import MyComponent from '../../../../slices/HomeHeroVideo';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HomeHeroVideo'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"home_hero_video","items":[],"primary":{"HomeH1":[{"type":"heading1","text":"Architect scalable networks","spans":[]}],"HomeHeroBaseline":[{"type":"paragraph","text":"Proident ea velit officia dolor id est esse ex officia ad veniam voluptate.","spans":[]}],"homeHeroVideo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
