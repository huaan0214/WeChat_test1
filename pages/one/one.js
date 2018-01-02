const app = getApp()

Page({
  data: {
    x: 0,
    y: 0,
    iconSize: [20, 30, 40, 50, 60, 70],
    iconColor: [
      '#F00', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    ],
    iconType: [
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    ]
  },
  tap: function (e) {
    this.setData({
      x: 30,
      y: 30
    });
  },
  onReady() {
    this.videoCtx = wx.createVideoContext('myVideo')
  },
  play() {
    this.videoCtx.play()
  },
  pause() {
    this.videoCtx.pause()
  }
})