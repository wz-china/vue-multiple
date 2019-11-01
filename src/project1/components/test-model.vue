<template>
  <div class="model">
    <input
      type="text"
      v-model="inputvalue"
    >
  </div>
</template>

<script>
  export default {
    name:"TestModel",
    model:{
      prop:'value',
      event:"inputEventModel"
    },
    props:{
      value:{
        type:String,
      }
    },
    data(){
      return {
        inputvalue:""
      }
    },
    watch:{
      inputvalue(newValue){
        this.$emit('inputEventModel', newValue);
      }
    }

  }

</script>

<style scoped>
  .model{
    width:100%;
    height: 2rem;
    border:1px solid #ccc;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }


</style>
