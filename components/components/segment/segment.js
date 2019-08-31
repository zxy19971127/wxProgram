// components/segment/segment.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true
  },

  properties: {
    items:{
      type:Array,
      value:[]
    },
    defalutIndex:{
      type:Number,
      value:0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    cIndex:0
  },

  lifetimes:{
    attached:function(e){
      var cIndex=this.properties.defalutIndex;
      this.setData({
        cIndex: cIndex
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tapItem:function(e){
      //console.log(e);
      var id=e.target.dataset.id;
      this.setData({
        cIndex:id
      })
      var detail={
        "id":id
      }
      var options={};
      this.triggerEvent("tapEvent", detail, options);
    }
  }
})
