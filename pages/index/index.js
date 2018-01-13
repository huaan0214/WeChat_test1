//index.js
//获取应用实例
const app = getApp()
var record = ""
Page({
  data: {
    ifRecord:0,
    count:0,
    recordTips:"按住录音",
    buttonType:"primary",
    motto: 'Hello World 多丢人啊',
    text:"It was a basy morning!",
    array:["one","two",2,"love"],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    staffA: { firstName: 'Hulk', lastName: 'Hu' },
    staffB: { firstName: 'Shang', lastName: 'You' },
    staffC: { firstName: 'Gideon', lastName: 'Lin' },
    objectArray: [
      { id: 5, unique: 'unique_5' },
      { id: 4, unique: 'unique_4' },
      { id: 3, unique: 'unique_3' },
      { id: 2, unique: 'unique_2' },
      { id: 1, unique: 'unique_1' },
      { id: 0, unique: 'unique_0' },
    ],
    numberArray: [1, 2, 3, 4]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  warning:function(){
  wx.showModal({
    title: '提示',
    content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
  })
  },
  chooseImageFile:function(){
  wx.chooseImage({
    count:1,
    success: function (res) { 
      wx.previewImage(
        {urls:res.tempFilePaths,
        }
      )},
  })
  },
  payMoney:function(){
  wx.requestPayment({
    timeStamp: '',
    nonceStr: '',
    package: '',
    signType: '',
    paySign: '',
  })
  },
  startToRecord:function(){
    this.setData({
      recordTips: "松手结束",
      buttonType: "warn",
    })
  wx.startRecord({
    success:function(res){
      record=res.tempFilePath
      console.log("录音成功:"+record)
      wx.playVoice({
        filePath: res.tempFilePath
      })
    },
    fail: function (res) {
      console.log("录音失败")
    }
  })
  },
stopToRecord:function(){
wx.stopRecord()
this.setData({
  recordTips: "按住录音",
  buttonType: "primary",
})
},

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShareAppMessage: function () {
    return {
      title: '华安要被转发了',
      path: 'pages/logs/logs'
    }
  },
  viewTap: function () {
    this.setData({
      motto:"不丢人"
    })
  },
  addNewField: function () {
    this.setData({
      'newField.text': 'new data'
    })
  },
  add:function() {
  this.setData({
    count:this.data.count+1
  })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  switch: function (e) {
    const length = this.data.objectArray.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addToFront: function (e) {
    const length = this.data.objectArray.length
    this.data.objectArray = [{ id: length, unique: 'unique_' + length }].concat(this.data.objectArray)
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addNumberToFront: function (e) {
    this.data.numberArray = [this.data.numberArray.length + 1].concat(this.data.numberArray)
    this.setData({
      numberArray: this.data.numberArray
    })
  },
  onHide: function () {
    wx.setTopBarText({
      text: 'hello world',
    })

  },
})
