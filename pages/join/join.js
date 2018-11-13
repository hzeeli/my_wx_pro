// pages/join/join.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '2019-03-01',
    items: [
      { name: 'activity1', value: '城市如诗' },
      { name: 'activity2', value: '美好生活', checked: 'true' },
      { name: 'activity3', value: '初冬写真集' },
    ]
  },

  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  formSubmit:function(e){
    if(e.detail.value.uname && e.detail.value.phone){
      wx.showToast({
        title: '报名成功',
        icon: 'success',     
        duration: 2000
      })
    }else{
      wx.showToast({
        title: '请核对报名信息',
        icon: 'none',
        duration: 2000
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

  }
})