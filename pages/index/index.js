//index.js
//获取应用实例
const app = getApp()
const db = wx.cloud.database()
Page({
  data: {
    list: []
  },
  onLoad: function() {
    //获取数据库中的数据
    var _this = this;
    if (db) {
      db.collection('firstItem').get({
        success: function(res) {
          console.log(res.data),
            // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
            _this.setData({
              list: res.data
            })
        }
      })
    }
  },
  kindToggle(e) {
    var _this = this
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].type == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    _this.setData({
      list
    })
    wx.reportAnalytics('click_view_programmatically', {})
  },
  gotoNext:function(e){
    const iid = e.currentTarget.id
    wx.navigateTo({
      url: 'page/cellCulture?type=' + iid,
    })
  }
})