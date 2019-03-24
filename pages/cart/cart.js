// pages/shopcar/shopcar.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isEmpty:true,
    emptyCart:'../../images/emptyCart.jpg'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const openid = app.globalData.openid;
    console.log(openid);
    if (openid) {
      wx.showLoading({
        title: '加载中',
      })
      wx.request({
        url: 'https://2s3864b749.qicp.vip/cart',
        data: {
          openid: openid
        },
        success: res => {
          console.log(res);
        },
        fail: err => {
          console.log(err);
        },
        complete: () => {
          wx.hideLoading();
        }
      })
    }
    else {
      wx.showModal({
        title: '请先登录',
        content: '登录后查看更多功能',
        success(res) {
          if (res.confirm) {
            wx.switchTab({ url: '../my/my' });
          } 
        }
      });
    }

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  },

  
})