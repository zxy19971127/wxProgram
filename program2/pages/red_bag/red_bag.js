// pages/red_bag/red_bag.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var systemInfo=wx.getSystemInfoSync();
    //console.log(systemInfo);
    var windowHeight=systemInfo.windowHeight;
    var windowWidth=systemInfo.windowWidth;

    var wid = windowWidth;
    var hei=100;
    var radius=(hei/2)+(wid*wid/8/hei);
    var left=-(radius-(wid/2));

    //height:{{radius*2*2}}rpx;width:{radius*2*2}}rpx;
    //
    this.setData({
      width: windowWidth,
      height: windowHeight,
      radius:radius,
      left:left
    })

  },

  scrollEvent:function(e){
    //console.log(e)
    var scrollTop=e.detail.scrollTop;
    if(scrollTop>0&&scrollTop<=100){
      var boxHeight = 100 - scrollTop;
      var boxWidth = this.data.width;
      var radius = (boxHeight / 2) + (boxWidth * boxWidth / 8 / boxHeight);
      var left = -(radius - (boxWidth / 2));
      this.setData({
        radius: radius,
        left: left
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

  }
})