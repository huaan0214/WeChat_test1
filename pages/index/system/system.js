// pages/index/system/system.js
var positionZ=[0,0,0,0,0]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    model:"",
    pixelRatio:"",
    screenWidth:0,
    screenHeight:0,
    windowWidth:0,
    windowHeight:0,
    language:"",
    version:"",
    system:"",
    platform:"",
    SDKVersion:"",

    getInfoReady:0,
    getNetworkReady: 0,
    networkType: "",
    isConnected:"",
    x:0,
    y:0,
    z:0,

    phoneNumber:"18549811330",
    scanCodeResult:"无",
    scanCodePath:"无",

    nowDirection:""
  
  },
  getSysInfo:function(){
    wx.getSystemInfo({
      success: res=>{ 
        this.setData({
          model:res.model,
          pixelRatio: res.pixelRatio,
          screenWidth:res.screenWidth,
          screenHeight:res.screenHeight,
          windowWidth: res.windowWidth,
          windowHeight: res.windowHeight,
          language: res.language,
          version: res.version,
          system: res.system,
          platform: res.platform,
          SDKVersion:res.SDKVersion,

          getInfoReady:1
        })
      },
    })

  },
  hindInfo:function(){
    this.setData({
      getInfoReady:0,
      getNetworkReady:0  
    })
  },
callPhone:function(){
  wx.makePhoneCall({
    phoneNumber: this.data.phoneNumber,
  })
},
scanCodes:function(){
  wx.scanCode({
    onlyFromCamera:false,
    success:res=>{
      this.setData({
      scanCodeResult:res.result
      })
      if(res.path)
      this.setData({
        scanCodePath:res.path
      })
      
    }
  })
},
  aboutCanIUse:function(){
    wx.canIUse('openBluetoothAdapter')
    wx.canIUse('getSystemInfoSync.return.screenWidth')
    wx.canIUse('getSystemInfo.success.screenWidth')
    wx.canIUse('showToast.object.image')
    wx.canIUse('onCompassChange.callback.direction')
    wx.canIUse('request.object.method.GET')
    wx.canIUse('contact-button')
    wx.canIUse('text.selectable')
    wx.canIUse('button.open-type.contact')
  },
  getNetworkStatus:function(){
    wx.getNetworkType({
      success: res => {
        this.setData({
          networkType: res.networkType,
          getNetworkReady: 1
        })
      },
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.onNetworkStatusChange(res => {
      if (res.isConnected)
        this.setData({
          networkType: res.networkType,
          isConnected: "网络已连接",
          getNetworkReady: 1
        })
      else
        this.setData({
          networkType: res.networkType,
          isConnected: "网络未连接",
          getNetworkReady: 1
        })
    })
  wx.onAccelerometerChange(res=>{
    var Z=res.z
    var Y=res.y
    var X=res.x
    var sumZ=0
    var aveZ=0
    this.setData({
      x:X,
      y:Y,
      z:Z
    })
    for(var i=0;i<(positionZ.length-1);i++)
    positionZ[i]=positionZ[i+1]
    positionZ[positionZ.length-1]=Z
    for (var i = 0; i < positionZ.length ; i++)
    sumZ+=positionZ[i]
    aveZ = sumZ/positionZ.length
  
    if(aveZ>-0.82)
    {
      wx.getSystemInfo({
        success: res => {
          this.setData({
            model: res.model,
            pixelRatio: res.pixelRatio,
            screenWidth: res.screenWidth,
            screenHeight: res.screenHeight,
            windowWidth: res.windowWidth,
            windowHeight: res.windowHeight,
            language: res.language,
            version: res.version,
            system: res.system,
            platform: res.platform,
            SDKVersion: res.SDKVersion,

            getInfoReady: 1
          })
        }
      })
    }
      else 
      this.setData({
        getInfoReady: 0,
        getNetworkReady: 0
      }) 
   
  })

  wx.onCompassChange(res=>{
    this.setData({
      nowDirection:res.direction
    })
  })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})