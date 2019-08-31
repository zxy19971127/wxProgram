// pages/jokes/jokes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jokes:[],
    showJoke:[],
    hasMoreData:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.getJokeData()
   
   var that=this;
   setTimeout(function(options){
     var jokes = that.data.jokes;
     var showJoke = that.data.showJoke;
     for(var i=0;i<10;i++){
       var joke=jokes[i];
       showJoke.push(joke);
     }
     that.setData({
       showJoke: showJoke
     })
     console.log(showJoke)
   },1500)
    
  },

 
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.getJokeData();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this;
    setTimeout(function (options) {
      var showJoke = that.data.showJoke;
      var len = showJoke.length;
      var jokes = that.data.jokes;
      var lens = jokes.length;
      if (len + 10 < lens) {
        for (var index = len; index < len + 10; index++) {
          var joke = jokes[index];
          showJoke.push(joke)
        }
        that.setData({
          showJoke: showJoke
        })
      } else if (len < lens) {
        for (var index = len; index < lens; index++) {
          var joke = jokes[index];
          showJoke.push(joke)
        }
        that.setData({
          showJoke: showJoke
        })
      } else {
        that.setData({
          hasMoreData: false
        })
        return;
      }

    }, 1500)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getJokeData:function(){
    var that = this;
    var timeStamp=parseInt((new Date).getTime()/1000)
    wx.request({
      url: 'http://v.juhe.cn/joke/content/list.php',
      data: {
        sort: "desc",
        time: timeStamp,
        key: "60ec608f039fa97566c51210042cd1fe"
      },
      success: function (res) {
        //console.log(res)
        var jokes = res.data.result.data;
        var tjokes=that.data.jokes;
        for(var i=0;i<jokes.length;i++){
          var joke=jokes[i];
          if(tjokes.indexOf(joke)!=-1){
            continue;
          }else{
            tjokes.push(joke)
          }
        }
        that.setData({
          tjokes: jokes
        })
        console.log(tjokes);
      },
      fail: function (res) {
        console.log("fail")
      }

    })
  }
})