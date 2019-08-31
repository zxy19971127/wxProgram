// pages/movable/movable.js
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
    var sysInfo=wx.getSystemInfoSync();
    var width = sysInfo.screenWidth;
    this.setData({
      width: width
    })
  },

  onTouchS: function (e) {
    //console.log(e)
    var startX=e.touches[0].pageX;
    //console.log(startX);
    this.setData({
      startX:startX
    })
  },

  onTouchE: function (e) {
    //console.log(e)
    var endX=e.changedTouches[0].pageX;
    //console.log(endX)
    var startX=this.data.startX;
    var changeX=this.data.changeX;
    var btnWid=this.data.width*0.2;
    var rWid=btnWid-20;
    if(startX>endX){
      if(changeX<-20){
        this.setData({
          x:-btnWid
        })
      }else{
        this.setData({
          x: 0
        })
      }
    }else{
      if (changeX >-rWid) {
        this.setData({
          x: 0
        })
      } else {
        this.setData({
          x: -btnWid
        })
      }
    }
  },

  onChange: function (e) {
    //console.log(e);
    var changeX=e.detail.x;
    this.setData({
      changeX:changeX
    })
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