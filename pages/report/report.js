// pages/report/report.js
const messager = require("../../utils/messenger.js");
var util = require('../../utils/util.js');
var IMG_URL = '';


Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemWidth: '',
    itemHeight: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    //小红花


    //使canvas适应屏幕长宽
    var that = this
    var WIDTH = ''
    var HEIGHT = ''

    wx.getSystemInfo({
      success: function(res) {
        WIDTH = res.windowWidth
        HEIGHT = 0.78*res.windowHeight
      },
    })

    this.setData({
      itemWidth: WIDTH,
      itemHeight: HEIGHT,
    });

    /*绘制canvas*/
   

    var ctx = wx.createCanvasContext('myCanvas')
    ctx.rect(0, 0,WIDTH, HEIGHT);
    ctx.setFillStyle('white');
    ctx.fill();
    var time = util.formatTime(new Date());
    ctx.setFontSize(16);
    ctx.setFillStyle('#333333');
    // ctx.font = "SentyTEApro";
    ctx.setTextAlign('center');

    const results = messager.getValue('result');
    let count = 0;
    for (let i = 0; i < results.length; i++) {
      if (results[i] === 1) {
        break;
      } else {
        count++;
      }
    }
    if (count > parseInt(0.8 * results.length)) {     
  
      ctx.drawImage("/image/report3.png", 0.1 * WIDTH, 0.1 * HEIGHT, WIDTH * 0.8, WIDTH * 0.8)
      ctx.fillText(time, 0.5 * WIDTH, 0.8 * HEIGHT);
      ctx.fillText('你可太菜了！', 0.5 * WIDTH, 0.85 * HEIGHT);
      ctx.fillText('获得了一朵小红花！', 0.5 * WIDTH, 0.90 * HEIGHT);
      ctx.drawImage("/image/flower_red.png", 0.25 * WIDTH, 0.94 * HEIGHT, 30, 25)
      ctx.drawImage("/image/flower_grey.png", 0.35 * WIDTH, 0.94 * HEIGHT, 30, 25)
      ctx.drawImage("/image/flower_grey.png", 0.45 * WIDTH, 0.94 * HEIGHT, 30, 25)
      ctx.drawImage("/image/flower_grey.png", 0.55 * WIDTH, 0.94 * HEIGHT, 30, 25)
      ctx.drawImage("/image/flower_grey.png", 0.65 * WIDTH, 0.94 * HEIGHT, 30, 25)
 
    } else if (count > parseInt(0.6 * results.length) && count <= parseInt(0.8 * results.length)) {

      ctx.drawImage("/image/report2.png", 0.1 * WIDTH, 0.08 * HEIGHT, WIDTH * 0.8, WIDTH * 0.8)
      ctx.fillText(time, 0.5 * WIDTH, 0.8 * HEIGHT);
      ctx.fillText('不行呀，要加油呀！', 0.5 * WIDTH, 0.85 * HEIGHT);
      ctx.fillText('获得了两朵小红花！', 0.5 * WIDTH, 0.90 * HEIGHT);
      ctx.drawImage("/image/flower_red.png", 0.25 * WIDTH, 0.94 * HEIGHT, 30, 25)
      ctx.drawImage("/image/flower_red.png", 0.35 * WIDTH, 0.94 * HEIGHT, 30, 25)
      ctx.drawImage("/image/flower_grey.png", 0.45 * WIDTH, 0.94 * HEIGHT, 30, 25)
      ctx.drawImage("/image/flower_grey.png", 0.55 * WIDTH, 0.94 * HEIGHT, 30, 25)
      ctx.drawImage("/image/flower_grey.png", 0.65 * WIDTH, 0.94 * HEIGHT, 30, 25)
    } else if (count > parseInt(0.4 * results.length) && count <= parseInt(0.6 * results.length)) {
    
      ctx.drawImage("/image/report2.png", 0.1 * WIDTH, 0.08 * HEIGHT, WIDTH * 0.8, WIDTH * 0.8)
      ctx.fillText(time, 0.5 * WIDTH, 0.8 * HEIGHT);
      ctx.fillText('凑合吧！', 0.5 * WIDTH, 0.85 * HEIGHT);
      ctx.fillText('获得了三朵小红花！', 0.5 * WIDTH, 0.9 * HEIGHT);
      ctx.drawImage("/image/flower_red.png", 0.25 * WIDTH, 0.94 * HEIGHT, 30, 25)
      ctx.drawImage("/image/flower_red.png", 0.35 * WIDTH, 0.94 * HEIGHT, 30, 25)
      ctx.drawImage("/image/flower_red.png", 0.45 * WIDTH, 0.94 * HEIGHT, 30, 25)
      ctx.drawImage("/image/flower_grey.png", 0.55 * WIDTH, 0.94 * HEIGHT, 30, 25)
      ctx.drawImage("/image/flower_grey.png", 0.65 * WIDTH, 0.94 * HEIGHT, 30, 25)
    } else if (count > parseInt(0.2 * results.length) && count <= parseInt(0.4 * results.length)) {
     
      ctx.drawImage("/image/report1.png", 0.1 * WIDTH, 0.08 * HEIGHT, WIDTH * 0.8, WIDTH * 0.8)
      ctx.fillText(time, 0.5 * WIDTH, 0.8 * HEIGHT);
      ctx.fillText('今天我家孩子坐得真端正！', 0.8 * WIDTH, 0.7 * HEIGHT);
      ctx.fillText('获得了四朵小红花！', 0.5 * WIDTH, 0.85 * HEIGHT);
      ctx.drawImage("/image/flower_red.png", 0.25 * WIDTH, 0.94 * HEIGHT, 30, 25)
      ctx.drawImage("/image/flower_red.png", 0.35 * WIDTH, 0.94 * HEIGHT, 30, 25)
      ctx.drawImage("/image/flower_red.png", 0.45 * WIDTH, 0.94 * HEIGHT, 30, 25)
      ctx.drawImage("/image/flower_red.png", 0.55 * WIDTH, 0.94 * HEIGHT, 30, 25)
      ctx.drawImage("/image/flower_grey.png", 0.65 * WIDTH, 0.94 * HEIGHT, 30, 25)
    } else if (count <= parseInt(0.2 * results.length)) {
    
      ctx.drawImage("/image/report1.png", 0.1 * WIDTH, 0.08 * HEIGHT, WIDTH * 0.8, WIDTH * 0.8)
      ctx.fillText(time, 0.5 * WIDTH, 0.8 * HEIGHT);
      ctx.fillText('太优秀了！', 0.5 * WIDTH, 0.85 * HEIGHT);
      ctx.fillText('获得了五朵小红花！', 0.5 * WIDTH, 0.9 * HEIGHT);
      ctx.drawImage("/image/flower_red.png", 0.25 * WIDTH, 0.94 * HEIGHT, 30, 25)
      ctx.drawImage("/image/flower_red.png", 0.35 * WIDTH, 0.94 * HEIGHT, 30, 25)
      ctx.drawImage("/image/flower_red.png", 0.45 * WIDTH, 0.94 * HEIGHT, 30, 25)
      ctx.drawImage("/image/flower_red.png", 0.55 * WIDTH, 0.94 * HEIGHT, 30, 25)
      ctx.drawImage("/image/flower_red.png", 0.65 * WIDTH, 0.94 * HEIGHT, 30, 25)
      
    }


    //绘制
    ctx.draw(false, setTimeout(function() {
    
      wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: WIDTH,
        height: HEIGHT,
        destWidth: 3 * WIDTH,
        destHeight: 3 * HEIGHT,
        canvasId: 'myCanvas',
        success: function(res) {
          console.log(res.tempFilePath)
          IMG_URL = res.tempFilePath
        }
      })
    }, 1000))



  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  //保存图片
  saveImage: function() {
    wx.saveImageToPhotosAlbum({
      filePath: IMG_URL
    })

  },

  //跳转到home页面
  toHome: function() {
    wx.reLaunch({
      url: '../index/index'
    })
  }
})