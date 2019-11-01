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
    <div class="buling">得到双向绑定的值为：{{value}}</div>


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


  /**
     动画
     1.keyframes 关键帧
     2.bulingling  动画名
     3.{
        0%：关键帧点
     }
   */
  @keyframes bulingling {
    0%{
      color: #000;
    }
    50%{
      color: orange;
    }
    100%{
      color: #000;
    }

  }

  /**
    animation:关键帧 时间 运动曲线 循环次数
   */
  .buling{
    animation: bulingling 1.5s ease-out infinite;
  }



</style>
