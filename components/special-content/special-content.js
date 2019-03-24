// components/special-content/special-content.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    shop:Object,
    price:String
  },
  observers:{
    'shop.price':function(p){
      this.setData({
        price: Number(p.$numberDecimal).toFixed(2)
      });
    }
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})
