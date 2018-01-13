// pages/index/show/show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationData: {}
  },
  showtoast:function(){
    wx.showToast({
      title: 'showToast测试',
      icon:"loading",
      image:"",
      duration:3000,
      mask:true
    })
  },
  showloading:function(){
    wx.showLoading({
      title: 'showLoading测试',
      mask:false
    })
  },
  hideloading:function(){
    wx.hideLoading()
  },
  showmodal:function(){
    wx.showModal({
      title: 'showModal测试',
      content: '这里是提示内容',
      showCancel:true,
      cancelText:"取消测试",
      cancelColor:"#eee",
      confirmText:"确认测试",
      confirmColor:"#888",
      success:res=>{
        console.log(res.cancel,res.confirm)
      }
    })
  },
  showactionsheet:function(){
    wx.showActionSheet({
      itemList: ["开始","第二","第三","第四","5","最多六个"],
      itemColor:'#888',
      success:res=>{
        console.log(res.tapIndex)
      }
    })
  },
setBarTitle(){
  wx.setNavigationBarTitle({
    title: '导航栏标题',
  })
  wx.showNavigationBarLoading()
  wx.setNavigationBarColor({
    frontColor:"#000000",
    backgroundColor:"#eee",
    animation:{
      durtion:2000,
      timingFunc:"easeIn"
    }
  })
},
scrollPosition:function(){
  wx.pageScrollTo({
    scrollTop: 500,
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
    var animation = wx.createAnimation({
      duration: 2000,
      timingFunction: "ease",
    })

    this.animation = animation

    animation.scale(2, 2).rotate(45).step();

    this.setData({
      animationData: animation.export()
    })

    setTimeout(function () {
      animation.translate(100).step();
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 1000)
  },
  rotateAndScale: function () {
    // 旋转同时放大
    this.animation.rotate(45).scale(2, 2).step()
    this.setData({
      animationData: animation.export()
    })
  },
  rotateThenScale: function () {
    // 先旋转后放大
    this.animation.rotate(45).step()
    this.animation.scale(2, 2).step()
    this.setData({
      animationData: animation.export()
    })
  },
  rotateAndScaleThenTranslate: function () {
    // 先旋转同时放大，然后平移
    this.animation.rotate(45).scale(2, 2).step()
    this.animation.translate(100, 100).step({ duration: 1000 })
    this.setData({
      animationData: animation.export()
    })
  
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