import MyComponent from '../../../../slices/Header';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Header'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"header","items":[],"primary":{"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=900&h=500&fit=crop"},"acceuilItem":[{"type":"paragraph","text":"Nostrud sit id magna ullamco adipisicing duis pariatur aute quis aliqua culpa mollit ea id deserunt.","spans":[]}],"prestationsItem":[{"type":"paragraph","text":"Laborum qui nisi dolore magna cillum mollit eiusmod aliqua elit duis voluptate sit. Veniam cillum est id sit magna consectetur officia reprehenderit laborum ut. Ea id exercitation esse ipsum ex commodo laboris.","spans":[]}],"BonsItem":[{"type":"paragraph","text":"Ullamco esse dolore fugiat minim est qui ut. Dolore eu cupidatat duis consectetur laboris mollit nisi ea sit.","spans":[]}],"abonnementsItem":[{"type":"paragraph","text":"Tempor exercitation qui velit occaecat et nulla.","spans":[]}],"buttonRdvContent":[{"type":"paragraph","text":"Voluptate qui occaecat nisi laboris ea excepteur laboris ex sunt. Enim sunt commodo labore. Lorem non nostrud nostrud dolore.","spans":[]}],"userItem":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=900&h=500&fit=crop"},"cartItem":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
