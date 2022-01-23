<template>
<div :class="{
  primary: primaryButton,
  secondary: !primaryButton,
  }"
> {{ buttonText }}

</div>
    
</template>

<script>
/* import { ref } from '@vue/reactivity' */




export default {
  props: {

    primary: {        
      type: Boolean,
      default: true,
    },
    buttonText: {
        type: String,
        default: "Prendre RDV",
    },
  },
  data(){
    return{
      primaryButton: this.$props.primary,
    }
  },
}
</script>

<style scoped>
div{
    width: 136px;
    height: 42px;
    border: 2px solid;
    background-color: white;
    text-align: center;
}
.primary{
  background-color: yellow;
}
.secondary{
  background-color: green;
}
</style>