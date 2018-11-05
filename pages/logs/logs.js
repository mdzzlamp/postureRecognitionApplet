//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  
  autoSkip: function () {
    clearInterval(this.interval)
    let timer = setTimeout(() => {
      clearTimeout(timer)
      wx.reLaunch({
        url: '../index/index'
      })
    }, 2000)
  },

  onLoad: function () {

    this.setData({
     
    })
    this.autoSkip()
  }

})
