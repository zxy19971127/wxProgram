const network = {
  getWebMessege: function (url, params) {
    var that = this;
    wx.request({
      url: url,
      data: {
      },
      success: function (res) {
        //console.log(res)
        var items = res.data.subject_collection_items;
        var length=items.length;
        var left=length%3;
        if(left==2){
          items.push(null);
        }
        if (params && params.success) {
          params.success(items);
        }
      } ,
      fail: function (res) {
        console.log("fail")
      }
    })
  }
}

export { network }