// pages/correct/correct.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrl: '',
    judgeList: [],
    imagesNum: 0,
    feedbackimage: '../../image/pikaqiu.gif',
  },

  takePhoto: function () {
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
          url: 'https://www.crophone.com/mdzz-mp/judge-by-image',
          filePath: that.data.imageUrl,
          name: 'image',
          success: function (res) {
            var judgeResult = JSON.parse(res.data)
            console.log("judgeResult", judgeResult)
            //https://blog.csdn.net/hicoldcat/article/details/53967334
            var param = {}
            var string = "judgeList[" + that.data.imagesNum + "]"
            param[string] = judgeResult;
            param.imagesNum = that.data.imagesNum + 1;
            that.setData(param);
            that.warnInteraction(judgeResult.category);
          }
        })
      }
    })
  },

  warnInteraction: function (result) {
    if (result == 1) {
      this.setData({
        feedbackimage: '../../image/pikaqiu.gif'
      })
    }
    if (result == 0) {
      this.setData({
        feedbackimage: '../../image/pikaqiu2.gif'
      })
    }
  },

  end: function () {
    wx.navigateTo({
      url: '../report/report'
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
    this.setData({

    });
    this.interval = setInterval(this.takePhoto, 5000);
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