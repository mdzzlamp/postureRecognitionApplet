// pages/correct/correct.js
const messager = require("../../utils/messenger.js");
var results = [];
const autoTexts1 = ['坐得真端正！', '继续保持哦！']
const autoTexts2 = ['坐姿不正确了呢！', '调整一下坐姿吧！']
const autoTexts3 = ['坐姿有点糟糕哦！', '赶紧调整坐姿吧！']
// const touchTexts = ['不要点我，点开始学习吧']

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrl: '',
    judgeList: [],
    imagesNum: 0,
    text:'',
    feedbackimage: '/image/state1.png',
  },

  // touch: function () {
  //   this.setData({
  //     text: touchTexts[Math.floor(Math.random() * touchTexts.length)]
  //   })
  //   clearTimeout(this.timer)
  //   clearInterval(this.interval)
  //   this.timer = setTimeout(() => {
  //     this.refreshText();
  //     this.interval = setInterval(this.refreshText, 3000);
  //   }, 3000)
  // },
  refreshText1: function () {
    this.setData({
      text: autoTexts1[Math.floor(Math.random() * autoTexts1.length)]
    })
  },
  refreshText2: function () {
    this.setData({
      text: autoTexts2[Math.floor(Math.random() * autoTexts2.length)]
    })
  },
  refreshText3: function () {
    this.setData({
      text: autoTexts3[Math.floor(Math.random() * autoTexts3.length)]
    })
  },

  takePhoto: function() {
    var that = this
    var ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          imageUrl: res.tempImagePath,
        })

        //将照片传至服务器，并获得判断返回结果
        wx.uploadFile({
          url: 'https://delbertbeta.cc/mdzz-mp/judge-by-image',
          filePath: that.data.imageUrl,
          name: 'image',
          success: function(res) {
            var judgeResult = JSON.parse(res.data)
            console.log("judgeResult", judgeResult)
            var param = {}
            var string = "judgeList[" + that.data.imagesNum + "]"
            param[string] = judgeResult;
            param.imagesNum = that.data.imagesNum + 1;
            that.setData(param);
            that.interval = setTimeout(that.takePhoto, 5000);
            that.warnInteraction(judgeResult.category);
          },
          fail: () => {
            that.interval = setTimeout(that.takePhoto, 5000);
          }
        })
      }
    })
  },

  warnInteraction: function(result) {
    results.splice(0, 0, result);
    let count = 0;
    for (let i = 0; i <= results.length && i <= 8; i++) {
      if (results[i] === 1) {
        break;
      } else {
        count++;

      }

    }
    if (count >= 8) {
      this.setData({
        feedbackimage: '/image/state3.png'
      })
      this.refreshText3();
      // clearTimeout(this.interval);
      // this.interval = setInterval(this.refreshText3, 3000);
    } else if (count >= 3 || count < 8) {
      this.setData({
        feedbackimage: '/image/state2.png'
      })
      this.refreshText2();
      // clearTimeout(this.interval);
      // this.interval = setInterval(this.refreshText2, 3000);
    } else {
      this.setData({
        feedbackimage: '/image/state1.png'
      })
      this.refreshText1();
      // clearTimeout(this.interval);
      // this.interval = setInterval(this.refreshText, 3000);
    }
    //   if (result == 1) {
    //     this.setData({
    //       feedbackimage: '../../image/pikaqiu.gif'
    //     })
    //   }
    //   if (result == 0) {
    //     this.setData({
    //       feedbackimage: '../../image/pikaqiu2.gif'
    //     })
    //   }
  },

  end: function() {
    clearTimeout(this.interval);
    messager.sendValue('result', results);
    wx.reLaunch({
      url: '../report/report'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.refreshText1();
    // this.interval = setInterval(this.refreshText1, 3000);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // this.setData({

    // });
    // this.interval = setInterval(this.takePhoto, 5000);
    results = [];
    setTimeout(this.takePhoto, 1000);
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


})