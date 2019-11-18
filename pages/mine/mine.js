//创建数据库对象
const db = wx.cloud.database()
Page({

  onLoad: function() {

  },
  addBtn: function() {

      // db.collection('firstItem').add({
      //   // data 字段表示需新增的 JSON 数据
      //   data: {
      //     // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
      //     firstName: "设备类",
      //     type: 4
      //   },
      //   success: function(res) {
      //     // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
      //     console.log(res)
      //   }
      // })
  },
  deleteBtn: function() {

    console.log('删除')
  },
  fixBtn: function() {
    console.log('修改')
  },
  scanleBtn: function() {
    console.log('查询'),
      db.collection('user').get({
        success: function (res) {
          // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
          console.log(res.data)
        }
      })
  },

})