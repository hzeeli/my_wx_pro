// pages/home/home.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    imagelist:[
      'https://images.pexels.com/photos/302028/pexels-photo-302028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'http://www.studioartiz.com/uploads/allimg/180831/1-1PS11S5090-L.jpg',
      'http://www.studioartiz.com/uploads/180829/1-1PR9203244314.jpg',
      'http://www.studioartiz.com/uploads/180713/1-1PG31H4452N.jpg'
    ]
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
    wx.showToast({
      title: '本作品为练习测试使用，不做商用',
      icon: 'none',
      duration: 4000
    })
    setTimeout(function () {
      wx.hideToast()
    }, 4000)
    
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
  
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '15737978211',
    })
  }
})