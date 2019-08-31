// pages/check_box/check_box.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    languages:[
      {
        id:1,
        name:"java"
      },{
        id:2,
        name:"c++"
      },{
        id:3,
        name:"js"
      },{
        id:4,
        name:"python"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  checkboxSubmit: function (e) {
    console.log(e)
    var values=e.detail.value.languages;
    var languages=this.data.languages;
    for(var i=0;i<values.length;i++){
      console.log(languages[values[i]-1].name)
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