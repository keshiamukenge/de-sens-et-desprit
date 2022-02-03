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
    border: 2px solid #130a07;
    background-color: transparent;
    text-align: center;
    border-radius: 2px;
    padding: 11px 18px;
    font-family: "Inter", sans-serif;
    font-size: 16px;
}
.primary{
  background-color: transparent;
  color: #130a07;
}
.secondary{
  background-color: #69140E;
  color: #F8EDE4;
  border: none;
}
</style>