<template>
  <div>
    <div @click="sendAjax">发起请求（mock测试）</div>
    <div>商品数量：{{computed_num}}</div>
    <div @click="changeStore">修改store</div>
    <div @click="changeSyncStore">异步修改store</div>
    <div class="flexible">flexible</div>


    <!-- 测试model双向绑定 -->
    <test-model
      v-model="value"
    ></test-model>
    <div>得到双向绑定的值为：{{value}}</div>


  </div>
</template>

<script>
import apiCommon from '../api/index'
import {mapGetters} from "vuex"
import TestModel from "components/test-model"

export default {
  name: 'products',
  data () {
    return {
      value:""
    }
  },
  components:{
    'test-model':TestModel
  },
  computed:{
    ...mapGetters("products",[
        'computed_num'
      ])
  },
  watch:{
    computed_num(newValue){
      console.log(newValue)
    }
  },
  methods: {
    changeSyncStore(){
      this.$store.dispatch("products/getArticle",111)
    },
    changeStore(){
      this.$store.commit("products/set_product_num",10)
    },
    async sendAjax () {
      let res = await apiCommon.normal('/get', 'get')
    }
  }
}
</script>

<style scoped lang="less">

  .flexible{
    width:6.4rem;
    height:30px;
    background: red;
  }



</style>
