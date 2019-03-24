// pages/adress_add/adress_add.js
const area = require('../../utils/area');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    receiver: '',
    phone: '',
    detail: '',
    region: '江西省/赣州市/安远县',
    label: '',
    labels: [{
      checked: true,
      value: '家'
    }, {
      value: '学校',
      checked: false
    }, {
      value: '公司',
      checked: false
    }, {
      value: '其他',
      checked: false
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (options.receiver) {
      this.setData({
        receiver: options.receiver
      });
    }
    if (options.phone) {
      this.setData({
        phone: options.phone
      });
    }
    if (options.detail) {
      this.setData({
        detail: options.detail
      });
    }
    if (options.region) {
      this.setData({
        region: options.region
      });
    }
    if (options.label) {
      let arr = this.data.labels;
      arr.forEach((val, index, array) => {
        if (val.value == options.label) {
          array[index].checked = true;
        } else {
          array[index].checked = false;
        }
      });
      this.setData({
        label: options.label,
        labels: arr
      });
    }
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
  bindRegionChange: function(e) {
    let area = e.detail.value;
    if (area[0] == '重庆市' || area[0] == '北京市' || area[0] == '重庆市' || area[0] == '香港特别行政区' || area[0] == '澳门特别行政区') {
      this.setData({
        region: area[0] + '/' + area[2]
      });
    } else {
      this.setData({
        region: area[0] + '/' + area[1] + '/' + area[2]
      });
    }
  },
  bindChange: function(e) {
    const id = e.target.id;
    this.setData({
      [id]: e.detail.value
    });
  },
  radioChange: function(e) {
    this.setData({
      label: e.detail.value
    });
  }
})