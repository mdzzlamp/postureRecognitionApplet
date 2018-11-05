// pages/correct/correct.js
// const timer = require('../../utils/wxTimer.js');

var ctx = {};

Page({

  /**
   * 页面的初始数据
   */
  data: {
    device: "front",
    borderColor: '',
    state: false,
    correctFrame: '../../image/correct_wrong.png'
  },

  takePhoto: function () {
    var that = this
    ctx.takePhoto({
      quality: 'high',
      fail: (e) => {
        console.log(e);
      },
      success: (res) => {
        // this.setData({
        //   imageUrl: res.tempImagePath,
        // })

        //将照片传至服务器，并获得判断返回结果
        wx.uploadFile({
          url: 'https://delbertbeta.cc/mdzz-mp/test/check-body',
          filePath: res.tempImagePath,
          name: 'image',
          complete: function (res) {
            console.log(res)
          },
          success: function (res) {
            var judgeResult = JSON.parse(res.data)
            console.log("judgeResult", judgeResult)
            that.interval = setTimeout(that.takePhoto, 5000);
            that.warnInteraction(judgeResult.category);
          },
          fail: function (e) {
            console.log(e)
            that.interval = setTimeout(that.takePhoto, 5000);
          }
        })
      }
    })
  },

  warnInteraction: function (result) {
    if (result == 1) {
      this.setData({
        state: true,
        correctFrame:'../../image/correct_right.png'

      })
      clearTimeout(this.interval)
      let timer = setTimeout(() => {
        clearTimeout(timer)
        // wx.reLaunch({
        //   url: '../detection/detection'
        // })
      }, 3000)
    }
    if (result == 0) {
      this.setData({
        state: false,
        correctFrame: '../../image/correct_wrong.png'
      })
    }
  },

jump:function(){
  wx.reLaunch({
          url: '../detection/detection'
        })
},


  switchDevice: function () {
    if (this.data.device === "front") {
      this.setData({
        device: "back"
      })
    } else {
      this.setData({
        device: "front"
      })
    }
    
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
    // this.setData({

    // });
    // this.interval = setInterval(this.takePhoto, 5000);
    ctx = wx.createCameraContext();
    setTimeout(this.takePhoto, 1000);
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


})