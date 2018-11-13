// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagelist1: [
      'http://www.studioartiz.com/uploads/allimg/180928/1-1P92Q05428.jpg',
      'http://www.studioartiz.com/uploads/allimg/180928/1-1P92Q05425.jpg',
      'http://218566.s81i.faiusr.com/2/108/AFEIxqsNEAIYACDaupzaBSjQyru1AzDuBTiqBUBs.jpg',
      'http://218566.s81i.faiusr.com/2/108/AFEIxqsNEAIYACC0upzaBSizxtJeMO4FOKoFQGw.jpg'
    ],
    imagelist2: [
      'http://218566.s81i.faiusr.com/2/108/AFEIxqsNEAIYACCRu5zaBSjwy_CqBjDuBTiqBUBs.jpg',
      'http://218566.s81i.faiusr.com/2/108/AFEIxqsNEAIYACCSu5zaBSichrLeBDDuBTiqBUBs.jpg',
      'http://218566.s81i.faiusr.com/2/108/AFEIxqsNEAIYACCPu5zaBSi40rC-BjDuBTiqBUBs.jpg',
      'http://218566.s81i.faiusr.com/2/108/AFEIxqsNEAIYACCOu5zaBSjopJLABzDuBTiqBUBs.jpg'
    ],
    imagelist3: [
      'http://218566.s81i.faiusr.com/2/108/AFEIxqsNEAIYACDwu5zaBSj73-e6AjDuBTiqBUBs.jpg',
      'http://218566.s81i.faiusr.com/2/108/AFEIxqsNEAIYACDyu5zaBSi6_YiRATDuBTiqBUBs.jpg',
      'http://218566.s81i.faiusr.com/2/108/AFEIxqsNEAIYACD0u5zaBSjo897iBTDuBTiqBUBs.jpg',
      'http://www.studioartiz.com/uploads/allimg/180928/1-1P92Q05420.jpg'
    ],
    imagelist4:[
      'http://218566.s81i.faiusr.com/2/108/AFEIxqsNEAIYACDBuZzaBSiGjI3yBDDuBTiqBUBs.jpg',
      'http://218566.s81i.faiusr.com/2/108/AFEIxqsNEAIYACDCuZzaBSi4wO7ABzDuBTiqBUBs.jpg',
      'http://218566.s81i.faiusr.com/2/108/AFEIxqsNEAIYACDGuZzaBSjT1-ObBDDuBTiqBUBs.jpg',
      'http://218566.s81i.faiusr.com/2/108/AFEIxqsNEAIYACDEuZzaBSiC38iYAjDuBTiqBUBs.jpg'
    ]
  },
  previewImage1: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: this.data.imagelist1 // 需要预览的图片http链接列表
    })
  }, 
  previewImage2: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: this.data.imagelist2 // 需要预览的图片http链接列表
    })
  }, 
  previewImage3: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: this.data.imagelist3 // 需要预览的图片http链接列表
    })
  }, 
  previewImage4: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: this.data.imagelist4 // 需要预览的图片http链接列表
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
  showimg:function(){

  }
})