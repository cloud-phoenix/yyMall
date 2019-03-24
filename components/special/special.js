// components/special.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    special:Object
  },
  lifetimes: {
    attached() {
      // 在组件实例进入页面节点树时执行
      let style = this.createSelectorQuery().select('special-head-mask').node;
      console.log(style);
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
