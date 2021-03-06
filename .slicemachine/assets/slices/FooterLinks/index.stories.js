import MyComponent from '../../../../slices/FooterLinks';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/FooterLinks'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"footer_links","items":[],"primary":{"HoraireTitle":[{"type":"heading4","text":"Synthesize killer initiatives","spans":[]}],"HoraireContent":[{"type":"paragraph","text":"Velit nostrud sint dolor ad. Duis duis incididunt commodo in nisi anim voluptate id pariatur in.","spans":[]}],"CoordonneesTitle":[{"type":"heading4","text":"Productize cross-media e-markets","spans":[]}],"adresse":[{"type":"paragraph","text":"Sit consectetur nisi pariatur enim mollit amet laboris occaecat. Sit cupidatat ea voluptate nisi aliqua cupidatat nulla nisi aliqua commodo aliquip commodo irure mollit aliqua.","spans":[]}],"Tel":[{"type":"paragraph","text":"Nisi aliquip ullamco nulla deserunt nostrud labore.","spans":[]}],"email":[{"type":"paragraph","text":"Ex sit est excepteur consectetur quis ad aliquip excepteur velit est tempor pariatur.","spans":[]}],"InstitutTitle":[{"type":"heading4","text":"Target front-end applications","spans":[]}],"Cgv":[{"type":"paragraph","text":"In ad elit ullamco fugiat amet irure laborum veniam aliqua anim eu reprehenderit. Id qui irure sit pariatur consectetur amet et ex ex nulla commodo. Incididunt Lorem nostrud ipsum non nulla adipisicing ipsum.","spans":[]}],"Livraisons":[{"type":"paragraph","text":"Magna fugiat laboris sunt tempor culpa eu. Tempor adipisicing fugiat do cupidatat nisi exercitation aute deserunt in eiusmod.","spans":[]}],"Plandusite":[{"type":"paragraph","text":"Ipsum est laboris culpa fugiat qui excepteur adipisicing officia pariatur sit dolore sint fugiat. Exercitation mollit duis occaecat qui nulla non consectetur veniam cupidatat occaecat. Exercitation ut voluptate est.","spans":[]}],"MentionsLegales":[{"type":"paragraph","text":"Duis do anim nulla et culpa nostrud ipsum veniam occaecat veniam ipsum cupidatat dolor non excepteur. Ipsum qui Lorem nulla dolore aliquip mollit culpa minim reprehenderit. Sunt dolore commodo dolore laborum nisi amet laborum est pariatur aute in.","spans":[]}],"NewsletterTitle":[{"type":"heading4","text":"Synergize back-end systems","spans":[]}],"InstagramLink":{"link_type":"Web","url":"http://twitter.com"},"InstagramTitle":[{"type":"paragraph","text":"Exercitation sint velit excepteur id ea nisi qui dolore nisi.","spans":[]}],"FacebookLink":{"link_type":"Web","url":"https://prismic.io"},"FacebookTitle":[{"type":"paragraph","text":"Nostrud deserunt esse do incididunt exercitation consectetur ex ullamco. Reprehenderit voluptate irure laboris fugiat in velit culpa deserunt dolore culpa culpa. Commodo qui enim est officia ut pariatur tempor quis qui culpa.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
