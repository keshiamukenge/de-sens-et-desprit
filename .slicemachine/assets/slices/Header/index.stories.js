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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"header","items":[{"prestaChildItem":[{"type":"paragraph","text":"Irure eiusmod dolor voluptate enim veniam ut aliqua est ipsum aute.","spans":[]}]},{"prestaChildItem":[{"type":"paragraph","text":"Do aliquip ullamco in eiusmod eiusmod elit nostrud. Anim duis nulla quis et.","spans":[]}]},{"prestaChildItem":[{"type":"paragraph","text":"Laboris irure consectetur aliquip. Anim consequat non aliquip eu ex nulla minim enim sint duis sint qui nostrud culpa elit. Duis anim pariatur sunt est aliqua culpa.","spans":[]}]},{"prestaChildItem":[{"type":"paragraph","text":"Amet id minim ad labore. Minim mollit nisi anim fugiat do aliquip dolore anim laborum aute id aute nisi adipisicing. Commodo veniam officia id ea laborum velit anim id in occaecat ut esse voluptate est aliqua.","spans":[]}]},{"prestaChildItem":[{"type":"paragraph","text":"Laborum culpa non nulla elit adipisicing. Qui irure aliquip excepteur mollit enim sunt dolore aliquip ullamco Lorem nostrud et. Deserunt veniam aliquip eu eiusmod cupidatat.","spans":[]}]},{"prestaChildItem":[{"type":"paragraph","text":"Pariatur minim et consequat id eiusmod.","spans":[]}]},{"prestaChildItem":[{"type":"paragraph","text":"Voluptate est fugiat et officia ullamco adipisicing ut adipisicing et ipsum aliqua deserunt.","spans":[]}]}],"primary":{"acceuilItem":[{"type":"paragraph","text":"Consectetur consequat est veniam cupidatat esse non aute veniam incididunt proident reprehenderit veniam minim. Aliqua sint eiusmod in reprehenderit incididunt enim sit est nostrud in sint ullamco. Nostrud aute amet quis elit in anim nostrud.","spans":[]}],"prestationsItem":[{"type":"paragraph","text":"Sint reprehenderit deserunt sit exercitation ea non Lorem dolor.","spans":[]}],"lumiereHeaderItem":[{"type":"paragraph","text":"Ullamco Lorem occaecat consectetur duis dolor. Excepteur nisi proident occaecat veniam irure duis nisi. Sit veniam sint in incididunt minim incididunt proident eiusmod ullamco labore eu non aliqua eiusmod.","spans":[]}],"BonsItem":[{"type":"paragraph","text":"Lorem ipsum proident magna sit anim veniam do. Labore aliqua consequat esse irure ea nostrud aliqua deserunt deserunt.","spans":[]}],"abonnementsItem":[{"type":"paragraph","text":"Est veniam exercitation ea velit officia aliqua nostrud ad Lorem labore qui dolore ipsum. Proident velit mollit commodo. Veniam dolore velit dolore sint.","spans":[]}],"buttonRdvContent":[{"type":"paragraph","text":"Fugiat labore quis irure. Ipsum pariatur sint labore voluptate ut laborum do ullamco id tempor veniam velit.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
