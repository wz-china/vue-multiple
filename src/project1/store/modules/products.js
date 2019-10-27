import apiCommon from '../../api/index'

export default {
  namespaced:true,

  state:{
    product_name:"",
    product_num:0,
    products:[]
  },


  //外部获取时，可视作计算属性
  getters:{
    computed_num(state){
      //这里进行相关处理计算
      return state.product_num
    }
  },


  //同步改变state数据用的，commit调用
  mutations:{
    set_product_num(state,num) {
      state.product_num += num
    }
  },


  //异步处理，commit结果
  /**
   * dispatch:调用其他模块里面的actions方法
   */
  actions:{
    getArticle({state,dispatch},param){
      return new Promise(async (resolve,reject)=>{
        try{
          let res = await apiCommon.normal('/get', 'get',param)
          state.product_num += res.length?res.length:10
          resolve()
        }catch (err){
          resolve()
        }
      })
    }
  }

}
