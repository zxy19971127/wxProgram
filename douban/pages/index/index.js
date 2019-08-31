import{network} from "../../utils/network.js"
import {globalUrls} from "../../utils/url.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchNeeded:false,
    movieList: "https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items",
    tvList: "https://m.douban.com/rexxar/api/v2/subject_collection/tv_hot/items",
    showList: "https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items",
    movies: [],
    tvs: [],
    shows: []

  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var movieList=that.data.movieList+"?count=7";
    var tvList = that.data.tvList + "?count=7";
    var showList = that.data.showList + "?count=7";
    network.getWebMessege(movieList,{
      success:function(movies){
        that.setData({
          movies:movies
        })
      }
    });
    network.getWebMessege(tvList,  {
      success: function (tvs) {
        that.setData({
          tvs: tvs
        })
      }
    });
    network.getWebMessege(showList,  {
      success: function (shows) {
        that.setData({
          shows: shows
        })
      }
    });
    //console.log(this.data.shows)
  },

  
})