// pages/index/media.js
const backgroundAudioManager = wx.getBackgroundAudioManager()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:"",
    taking:"拍摄",
    position:"back",
    flash:"off",
    status:"",
    dataUrl:"",
    currentTime:0,
    currentPosition:"",
    duration:"",
    downloadPercent:"",
    savePath:""
  
  },
  audioError:function(e){
    console.log(e.detail.errMsg)
  },
  playMusic:function(){
    wx.playBackgroundAudio({
      dataUrl: "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46",
      title:"此时此刻",

    })
  },
  getMusicInfo:function(){
    wx.getBackgroundAudioPlayerState({
      success: res=>{
        this.setData({
        status:res.status,
        dataUrl : res.dataUrl,
        currentPosition: res.currentPosition,
        duration: res.duration,
        downloadPercent: res.downloadPercent
        })
      }
    })
  },
  audioManagePlay: function () {
    console.log(backgroundAudioManager.currentTime)
    backgroundAudioManager.play()
  },
  audioManagePause: function () {
    console.log(backgroundAudioManager.currentTime)
    backgroundAudioManager.pause()
  },
  audioManageStop:function(){
    console.log(backgroundAudioManager.currentTime)
    backgroundAudioManager.stop()
  },
  adjustPosition:function(){
    if(this.data.position=="back")
    this.setData({
      position:"front",
      flash:"off"
    })
    else
      this.setData({
        position: "back"
      })

  },
  adjustFlash: function () {
    if (this.data.flash == "off"&&this.data.position=="back")
      this.setData({
        flash: "on"
      })
    else
      this.setData({
        flash: "off"
      })

  },
  takePhoto:function(){
    const cameraContext=wx.createCameraContext(this)
    cameraContext.takePhoto({
      quality:"high",
      success:res=>{
        this.setData({
          src:res.tempImagePath,
          taking:"重拍"
        })
        
      }      
      })
  },
  savePhoto:function(){
    wx.saveFile({
      tempFilePath: this.data.src,
      success:res=>{
        this.setData({
          savePath:res.savedFilePath,
          src:"",
          taking: "拍摄"
        })
      }
    })
  },
  reSetSrc:function(){
    this.setData({
      src: "",
      taking: "拍摄"
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
    backgroundAudioManager.title = '此时此刻'
    backgroundAudioManager.epname = '此时此刻'
    backgroundAudioManager.singer = '汪峰'
    backgroundAudioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
    backgroundAudioManager.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46' // 设置了 src 之后会自动播放
  
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