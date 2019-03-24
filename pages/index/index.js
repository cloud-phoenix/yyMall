// pages/shopcar/shopcar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:{},
    loadSuccess:false,
    promiseImg: [{
        text: '官方正品保证',
        url: '../../images/good.png'
      },
      {
        text: '7天无理由退货',
        url: '../../images/back.png'
      },
      {
        text: '24小时内发货',
        url: '../../images/24h.png'
      }
    ],
    notices:[
      { title: '购物无忧', detail:'云鱼商城所售商品均是正品，请您放心选购！'},
      { title: '7天无理由退换货', detail: '支持7天无理由退换货，未经拆卸、包装完整、防伪码未刮开且不影响二次销售，可进行退换！' },
      { title: '发货/物流', detail: '本店默认发顺丰、EMS、申通、中通、韵达等快递，付款后24小时内安排发货，如遇节假日或特殊天气，可能延长，请您耐心等待。\n因仓库实现多点多仓发货，故不接受指定快递哦，请多谅解！' }
    ],
  indicatorDots: true,
  autoplay: true,
  interval: 3000,
  duration: 500,
  circular: true
},

/**
 * 生命周期函数--监听页面加载
 */
onLoad: function(options) {
  wx.request({
    url: 'https://2s3864b749.qicp.vip/index',
    success:res=>{
      this.setData({ index: res.data},()=>{
        wx.hideLoading();
      });
    }
  });
  wx.showLoading({
    title: '页面加载中',
    mask: true
  });
},

/**
 * 生命周期函数--监听页面初次渲染完成
 */
onReady: function() {
},
/**
 * 生命周期函数--监听页面显示
 */
onShow: function() {
},
/**
 * 生命周期函数--监听页面隐藏
 */
onHide: function() {

},

/**
 * 生命周期函数--监听页面卸载
 */
onUnload: function() {

},

/**
 * 页面相关事件处理函数--监听用户下拉动作
 */
onPullDownRefresh: function() {},

/**
 * 页面上拉触底事件的处理函数
 */
onReachBottom: function() {

},

/**
 * 用户点击右上角分享
 */
onShareAppMessage: function() {

},
/**
 * s 
 */
goToSearch: function() {
  wx.navigateTo({
    url: '../search/search'
  })
}
})