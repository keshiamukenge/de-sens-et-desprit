import MyComponent from '../../../../slices/HomeSectionSubPrestas';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HomeSectionSubPrestas'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"home_section_sub_prestas","items":[{"linkPrestasSubCat":{"link_type":"Web","url":"http://twitter.com"},"textPrestasSubCat":[{"type":"paragraph","text":"Velit labore occaecat aliqua deserunt proident sit culpa. Irure irure velit aute cupidatat velit eu reprehenderit do mollit. Amet est ea cupidatat.","spans":[]}]},{"linkPrestasSubCat":{"link_type":"Web","url":"https://prismic.io"},"textPrestasSubCat":[{"type":"paragraph","text":"Commodo nulla quis reprehenderit mollit qui excepteur deserunt. Ad ea nulla proident fugiat elit sunt proident. Laborum deserunt do sint pariatur ut occaecat exercitation esse dolor dolor cupidatat veniam incididunt consectetur.","spans":[]}]},{"linkPrestasSubCat":{"link_type":"Web","url":"https://prismic.io"},"textPrestasSubCat":[{"type":"paragraph","text":"Enim labore consequat sint sint incididunt aute.","spans":[]}]},{"linkPrestasSubCat":{"link_type":"Web","url":"https://slicemachine.dev"},"textPrestasSubCat":[{"type":"paragraph","text":"In esse et ad reprehenderit. Laborum eiusmod nulla anim cupidatat eiusmod sint sunt officia ad ipsum tempor et nostrud elit occaecat. Cillum elit nisi ipsum ex est duis laborum.","spans":[]}]},{"linkPrestasSubCat":{"link_type":"Web","url":"http://google.com"},"textPrestasSubCat":[{"type":"paragraph","text":"Incididunt esse eu sunt ut dolore irure voluptate sint nostrud ea nisi. Ullamco id pariatur non quis Lorem dolor veniam est aliqua.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
