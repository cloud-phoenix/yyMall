// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    history:['连衣裙','T恤'],
    beginSearch:false,
    inputValue:'',
    order:0,
    orderBy: ['推荐', '价格从低到高','价格从高到低'],
    orders: null,
    shows:[],
    showHistory:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const search = options.search;
    if (search){
      this.setData({ inputValue: search });
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
    if (this.data.inputValue){
      wx.request({
        url: 'https://2s3864b749.qicp.vip/search',
        data: {
          search: this.data.inputValue
        },
        success: res => {
          this.setData({ shops: res.data.shops });
        }
      })
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
  beginSearch:function(e){
    this.setData({ beginSearch:true});
    wx.request({
      url: 'https://2s3864b749.qicp.vip/search?search=' + this.data.inputValue,
      success:res=>{
        this.setData({ shops: res.data.shops });
      }
    });
  },
  inputFocus:function(e){
    this.setData({ beginSearch: false });
  },
  inputChange:function(e){
    let input = e.detail.value;
    if (input){
      this.setData({ inputValue: input });
    }
  },
  clearInput:function(e){
    
    this.setData({ inputValue:''},function(err){
      console.log(err);
    });
  },
  orderBy:function(e){
    let text=e._relatedInfo.anchorTargetText;
    let shops = this.data.shops;
    if (text =='价格从低到高'){
      shops=shops.sort((f,s)=>{
        return f.price.$numberDecimal - s.price.$numberDecimal;
      });
    } else if (text == '价格从高到低'){
      shops = shops.sort((f, s) => {
        return s.price.$numberDecimal - f.price.$numberDecimal;
      })
    }else{
      shops = null;
    }
    this.setData({ orders: shops });
  }
})