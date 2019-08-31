// pages/list/list.js
import { network } from "../../utils/network.js"
import { globalUrls } from "../../utils/url.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchNeeded: false,
    items:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var type=options.type;
    var that = this;
    wx.showLoading({
      title: '正在加载中',
    })
    var url = globalUrls.movieList;
    if(type=="movie"){
      wx.setNavigationBarTitle({
        title: '电影',
      })
      url = globalUrls.movieList;
    }else if(type=="tv"){
      wx.setNavigationBarTitle({
        title: '电视剧',
      })
      url = globalUrls.tvList;
    }else{
      wx.setNavigationBarTitle({
        title: '综艺',
      })
      url = globalUrls.showList;
    }
    
    network.getWebMessege(url,  {
      success: function (items) {
        that.setData({
          items: items
        })
        wx.hideLoading();
      }
    });
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