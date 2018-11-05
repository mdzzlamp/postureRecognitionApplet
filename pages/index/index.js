//index.js
//获取应用实例
const app = getApp()

const autoTexts = ['来和我一起学习吧！', '今天也要坐端正哦！']
const touchTexts = ['不要点我，点开始学习吧！']

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    text: '',
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  go: function() {
    wx.reLaunch({
      url: '../correct/correct'
    })
  },

  touch: function() {
    this.setData({
      text: touchTexts[Math.floor(Math.random() * touchTexts.length)]
    })
    clearTimeout(this.timer)
    clearInterval(this.interval)
    this.timer = setTimeout(() => {
      this.refreshText();
      this.interval = setInterval(this.refreshText, 3000);
    }, 3000)
  },

  refreshText: function() {
    const temp = autoTexts[Math.floor(Math.random() * autoTexts.length)];
    this.setData({
      text: temp
    })

  },

  onLoad: function() {
    this.refreshText();
    this.interval = setInterval(this.refreshText, 3000);

  },
})