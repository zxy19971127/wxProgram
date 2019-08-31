// pages/weather/weather.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weathers:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: 'http://apis.juhe.cn/simpleWeather/query',
      data:{
        city:"东莞",
        key:"23ff9a75a447da9c5c16e7fa53091fba"
      },
      success:function(res){
        console.log(res);
        var weathers=res.data.result.future;
        that.setData({
          weathers: weathers
        })
      },
      fail:function(res){
        console.log("fail")
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  seeWeather: function (e) {
    var weathers=this.data.weathers;
    console.log(weathers)
  },

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

  }
})