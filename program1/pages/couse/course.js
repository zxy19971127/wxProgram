// pages/couse/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   lines:[
     {
       id:1,
       name:"switch1",
       unique:"unique_1"
     },
     {
       id: 2,
       name: "switch2",
       unique: "unique_2"
     }
   ],
   articles:[
     {
       id: 1,
       title: "西游记"
     },
     {
       id: 2,
       title: "三国演义"
     },
     {
       id: 3,
       title: "水浒传"
     },
     {
       id: 4,
       title: "红楼梦"
     }
   ]
  },

  tapEvent:function(e){
    var lines=this.data.lines;
    var length=lines.length+1
    lines.splice(0,0,{
      id:length,
      name: "switch" + length,
      unique:"unique_"+length
    })
    this.setData({
      lines:lines
    })
  },

  onClickArticle:function(e){
    var dataset=e.currentTarget.dataset;
    var id=dataset.id;
    wx.navigateTo({
      url: '/pages/nav/nav?id='+id,
    })
  },

  onOutterClick:function(e){
    console.log("点击了outterView")
  },

  onInnerClick:function(e){
    console.log("点击了innerView")
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