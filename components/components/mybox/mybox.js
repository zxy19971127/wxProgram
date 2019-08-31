// components/mybox/mybox.js
Component({
  options:{
    multipleSlots:true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    showInner:{
      type:Boolean,
      value:false
    },
    innerText:{
      type:String,
      value:""
    },
    innerSize:{
      type:Number,
      value:150
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    tapInner: function (e) {
      console.log("+++++++++++++++++++++++");
      console.log("tap the inner view");
      console.log("+++++++++++++++++++++++");
      var index=e.target.dataset.index;
      var detail={
        "index":index
      };
      var options={}
      this.triggerEvent("customEvent",detail,options);
    },
  },

  lifetimes:{
    created: function (e) {
      console.log("come to the created")
    },

    attached: function (e) {
      console.log("come to the attached")
    },

    detached: function (e) {
      console.log("come to the  detached")
    },

    
  },

  pageLifetimes: {
    show: function (e) {
      console.log("show");
    },
    hide: function (e) {
      console.log("hide");
    },
    resize: function (e) {
      console.log("resize");
    }
  }


})
