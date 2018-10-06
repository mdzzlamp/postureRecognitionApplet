// pages/report/report.js

var util = require('../../utils/util.js');
var IMG_URL = ''
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemWidth: '',
    itemHeight: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //使canvas适应屏幕长宽
    var that = this
    var WIDTH = ''
    var HEIGHT = ''

    wx.getSystemInfo({
      success: function (res) {
        WIDTH = res.windowWidth
        HEIGHT = res.windowHeight
      },
    })

    this.setData({
      itemWidth: WIDTH,
      itemHeight: HEIGHT,
    });

    /*绘制canvas*/

    //背景图
    var ctx = wx.createCanvasContext('myCanvas')
    ctx.drawImage("/image/reportBackground.jpg", 0, 0, WIDTH, HEIGHT)

    //日期
    var time = util.formatTime(new Date());
    ctx.setFontSize(35);
    ctx.setFillStyle('black');
    ctx.fillText(time, 20, 250);

    //评语    
    ctx.fillText('我家娃娃坐的可端正了', 20, 300);

    //小红花

    //绘制
    ctx.draw(false, setTimeout(function () {
      wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: WIDTH,
        height: HEIGHT,
        destWidth: 3 * WIDTH,
        destHeight: 3 * HEIGHT,
        canvasId: 'myCanvas',
        success: function (res) {
          console.log(res.tempFilePath)
          IMG_URL = res.tempFilePath
        }
      })
    }, 1000))



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

  },

  //保存图片
  saveImage: function () {
    wx.saveImageToPhotosAlbum({
      filePath: IMG_URL
    })

  },

  //跳转到home页面
  toHome: function () {
    wx.navigateTo({
      url: '../index/index'
    })
  }
})