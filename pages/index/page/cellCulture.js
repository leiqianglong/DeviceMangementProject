var app = getApp();
const db = wx.cloud.database()
//声明全局变量
let proListToTop = [], menuToTop = [], MENU = 0, windowHeight, timeoutId;
const name =  "https://img14.360buyimg.com/n0/jfs/t1/27894/15/14799/872973/5cac08bcE19c7451e/e0ed8b048c644a07.png";
// MENU ==> 是否为点击左侧进行滚动的，如果是，则不需要再次设置左侧的激活状态
Page({

  data: {
    currentActiveIndex: 0,//当前选中的下表
    navList:[],
    producteds:[]//右侧物品数组
  },

  selectMenu: function (e) {
    var index = e.currentTarget.dataset.itemIndex;

    console.log(index)
    const _ = db.command
    if (db) {
      db.collection('objects').where({
        // or 方法用于指定一个 "或" 条件，此处表示需满足 _.eq(0) 或 _.eq(100)
        type: _.eq(1),
        state: _.eq(0)
      }).count({
        success: function (res) {
          console.log('查询到了符合条件的数据是：' + res.total)
        }
      })
    }



    // //当前选中的下标赋值
    if (Number(index) === this.data.currentActiveIndex) return
    this.setData({
      currentActiveIndex: Number(index),
      // item: this.data.navList[index].producted
    })
    // console.log(this.data.navList[index].producted);
  },
  selectList: function (e) {
    var index = e.currentTarget.dataset.food;
    console.log(index);
  },
  onLoad: function (options) {
    // console.log('携带的参数是：' +options.type);
    //查询左侧子列表数据
    //获取数据库中的数据
    var _this = this;
    const _ = db.command
    if (db) {
      db.collection('threeItems').where({
        // or 方法用于指定一个 "或" 条件，此处表示需满足 _.eq(0) 或 _.eq(100)
        father_id: _.eq(options.type)
      }).get({
          success: function (res) {
            _this.setData({
               navList:res.data
            })
          }
        })
    }
  },
  onReady: function () {
    // 页面渲染完成
    this.setData({
      // item: this.data.navList[0].producted
    })
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }

})