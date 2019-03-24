// pages/my/my.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasUserInfo:false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo: {},
    tablists:[{
      name:'我的订单',
      icon:'../../images/order.png'
    }, {
        name: '地址管理',
        icon: '../../images/adress.png',
        url: '../adress/adress'
      }, {
        name: '意见反馈',
        icon: '../../images/feedback.png',
        url:'../feedback/feedback'
      },{
        name: '云鱼商城用户协议',
        icon: '../../images/agreement_user.png',
        url:'../agreement/agreement?name=user'
      }, {
        name: '云鱼隐私协议',
        icon: '../../images/agreement_private.png',
        url: '../agreement/agreement?name=private'
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = data => {
        this.setData({
          userInfo: data.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          const userInfo=res.userInfo;
          wx.login({
            success: res => {
              if (res.code) {
                // 发起网络请求
                wx.request({
                  method: 'POST',
                  url: 'https://2s3864b749.qicp.vip/login',
                  data: {
                    code: res.code,
                    userInfo: userInfo
                  },
                  success: res => {
                    wx.hideLoading();
                    if (res.data.err) {
                      wx.showToast({
                        title: '登录失败，失败原因：' + err,
                        duration: 500,
                        mask: true
                      });
                    } else {
                      this.setData({
                        userInfo: res.data.userInfo,
                        hasUserInfo: true
                      })
                      app.globalData.openid = res.data.openid;
                      app.globalData.userInfo = res.data.userInfo;
                    }
                  }
                });
              }
            }
          });

        }
      })
    }
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

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getUserInfo: function (e) {
    wx.showLoading({
      title: '页面加载中',
      mask: true
    });
    const userInfo = e.detail.userInfo;
    wx.login({
      success: res => {
        if (res.code) {
          // 发起网络请求
          wx.request({
            method: 'POST',
            url: 'https://2s3864b749.qicp.vip/login',
            data: {
              code: res.code,
              userInfo: userInfo
            },
            success: res => {
              wx.hideLoading();
              if(res.data.err) {
                wx.showToast({
                  title: '登录失败，失败原因：' + err,
                  duration: 500,
                  mask: true
                });
              } else {
                this.setData({
                  userInfo: res.data.userInfo,
                  hasUserInfo: true
                })
                app.globalData.openid = res.data.openid;
                app.globalData.userInfo = res.data.userInfo;
              }
              }
          });
        } 
      }
    });
  },
  loginOut:function(e){
    app.globalData.userInfo=null;
    app.globalData.openid = null;
    this.setData({
      userInfo: null,
      hasUserInfo: false
    })
  }
})