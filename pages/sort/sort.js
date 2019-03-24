// pages/class/class.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 0,
    sorts:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      url: 'https://2s3864b749.qicp.vip/sort',
      success: res => {
        this.setData({ sorts: res.data }, () => {
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
  onPullDownRefresh: function() {

  },

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
  navbarTap:function(e){
        let id =e.target.id,
          sorts=this.data.sorts;
        for(let item of sorts){
            if(item._id==id){
              this.setData(({activeIndex:item.index}));
              return;
            }
        }
  },
  goToSearch:function(e){
  wx.navigateTo({
    url: '../search/search?search=' + e._relatedInfo.anchorRelatedText
  });
  }
})