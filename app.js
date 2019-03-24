//app.js
App({
  onLaunch: function() {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              const userInfo = res.userInfo;
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
                        if (res.data.err) {
                          wx.showToast({
                            title: '登录失败，失败原因：' + err,
                            duration: 500,
                            mask: true
                          });
                        } else {
                          this.globalData.openid = res.data.openid;
                          this.globalData.userInfo = res.data.userInfo;
                          if (this.userInfoReadyCallback){
                            userInfoReadyCallback(res.data);
                          }
                        }
                      }
                    });
                  }
                }
              });
            }
          })
        }
      }
    });
  },
  globalData: {
    userInfo: null,
    openid:null
  }
})