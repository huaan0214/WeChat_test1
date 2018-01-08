// pages/index/location/location.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude:"",
    latitude:"",
    scale:16,
    markers:[{
      id:1,
      latitude:"",
      longitude:"",
      title:"位置1",
      iconPath:"zhihu.jpg",
      alpha:1,
      width:20,
      height:20,
      callout:{
        content: '',
        color:"gray",
        fontSize:17,
        borderRadius:50,
        bgColor:"white",
        padding:5,
        display:"BYCLICK"
      },
    }],
  },
  bindMarkerTap:function(){
    var contents = "经度：" +this.data.longitude + "纬度：" + this.data.latitude
    var markCalloutContent="markers[0].callout.content"
    this.setData({
      [markCalloutContent]:contents
    })
  },
  bindMapTap:function(){
    var markLongitude = "markers[" + 0 + "].longitude"
    var markLatitude = "markers[" + 0 + "].latitude"
    wx.chooseLocation({
      type: 'wgs84',
      success: res=> {
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude,
          [markLongitude]: res.longitude,
          [markLatitude]: res.latitude
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var markLongitude = "markers[" + 0 + "].longitude"
    var markLatitude = "markers[" + 0 + "].latitude"
    wx.getLocation({
      type: 'wgs84',
      success: res => {
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude,
          [markLongitude]: res.longitude,
          [markLatitude]: res.latitude
        })
      },
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