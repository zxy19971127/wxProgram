// components/rateStar/rateStar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    course:{
      type:Number,
      value:0
    },
    starSize:{
      type:Number,
      value:20
    },
    fontSize:{
      type: Number,
      value: 20
    },
    fontColor:{
      type:String,
      value:"#8a8a8a"
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    star_2:0,
    star_1:0,
    star_0:5,
    star_0_array:[],
    star_1_array: [],
    star_2_array: [],
  },

  lifetimes:{
    attached:function(e){
      var that=this;
      var course = this.properties.course;
      var courseInt=parseInt(course);
      var star_2=parseInt(courseInt/2);
      var star_1=courseInt-star_2*2;
      var star_0=5-star_1-star_2;
      
      var star_0_array= [];
      var star_1_array = [];
      var star_2_array = [];
      for(var i=0;i<star_0;i++){
        var t="a";
        star_0_array.push(t)
      }
      for (var i = 0; i < star_1; i++) {
        var t = "a";
        star_1_array.push(t)
      }
      for (var i = 0; i < star_2; i++) {
        var t = "a";
        star_2_array.push(t)
      }
      var ratetext = course && course > 0 ? course.toFixed(1):"未评分";
      that.setData({
        star_2: star_2,
        star_1: star_1,
        star_0: star_0,
        star_0_array: star_0_array,
        star_1_array: star_1_array,
        star_2_array: star_2_array,
        ratetext: ratetext
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
