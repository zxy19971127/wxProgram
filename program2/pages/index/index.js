Page({

  /**
   * 页面的初始数据
   */
  data: {
    //time:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var date = new Date(2019, 7, 17, 10, 7, 0, 0);
    var time=date.getTime();
     this.setData({
       time : time
     })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (e) {
   
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function (e) {
    
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

  goToNextPage: function(){
    wx.navigateTo({
      url: '/pages/mine/mine',
    })
  }
})