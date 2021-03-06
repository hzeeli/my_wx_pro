// pages/map/map.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    latitude: "34.7965809005",
    longitude: "113.6658382416",
    // 标记点 当前位置
    markers: [
      {
        id: "1",
        latitude: "34.7965809005",
        longitude: "113.6658382416",
        width: 20,
        height: 20,
        iconPath: "/assets/icons/9.png",
        title: "哪里"
      }
    ],    
    // 圆
    circles: [
      {
        latitude: "34.7965809005",
        longitude: "113.6658382416",
        color: '#FF0000DD',
        fillColor: '#7cb5ec88',
        radius: 1000,
        strokeWidth: 0
      }
    ],
    controls: []
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