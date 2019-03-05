let foodsData = require('../../resources/dinning')

Page({



  /**
 
   * 页面的初始数据
 
   */

  data: {

    imagelist: [

      'http://b4-q.mafengwo.net/s5/M00/B7/74/wKgB3FEkg5KAamtnAA0MwCDLL5c10.jpeg?imageMogr2%2Fthumbnail%2F%21690x450r%2Fgravity%2FCenter%2Fcrop%2F%21690x450%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL2I0LXEubWFmZW5nd28ubmV0L3MxMS9NMDAvNDQvOUIvd0tnQkVGc1A1UnlBRHY3cEFBQUhaWlVQUmxROTkwLnBuZw%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11',

      'http://n1-q.mafengwo.net/s9/M00/9D/71/wKgBs1ecxSKAAQQYAAliKiiu7EA73.jpeg?imageMogr2%2Fthumbnail%2F%21690x450r%2Fgravity%2FCenter%2Fcrop%2F%21690x450%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL2I0LXEubWFmZW5nd28ubmV0L3MxMS9NMDAvNDQvOUIvd0tnQkVGc1A1UnlBRHY3cEFBQUhaWlVQUmxROTkwLnBuZw%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11',

      'http://p4-q.mafengwo.net/s12/M00/CF/1C/wKgED1vbv7CAZaeYAA5jgDSELXw59.jpeg?imageMogr2%2Fthumbnail%2F%21690x450r%2Fgravity%2FCenter%2Fcrop%2F%21690x450%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL2I0LXEubWFmZW5nd28ubmV0L3MxMS9NMDAvNDQvOUIvd0tnQkVGc1A1UnlBRHY3cEFBQUhaWlVQUmxROTkwLnBuZw%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11',

      'http://b1-q.mafengwo.net/s12/M00/91/EF/wKgED1vgGrCANBzhAFhjPUWjU3s29.jpeg?imageMogr2%2Fthumbnail%2F%21690x450r%2Fgravity%2FCenter%2Fcrop%2F%21690x450%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL2I0LXEubWFmZW5nd28ubmV0L3MxMS9NMDAvNDQvOUIvd0tnQkVGc1A1UnlBRHY3cEFBQUhaWlVQUmxROTkwLnBuZw%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11',

      'http://p4-q.mafengwo.net/s10/M00/65/81/wKgBZ1lSqgOAJG8kABAt0El8twI82.jpeg?imageMogr2%2Fthumbnail%2F%21690x450r%2Fgravity%2FCenter%2Fcrop%2F%21690x450%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL2I0LXEubWFmZW5nd28ubmV0L3MxMS9NMDAvNDQvOUIvd0tnQkVGc1A1UnlBRHY3cEFBQUhaWlVQUmxROTkwLnBuZw%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11'

    ],

    foods: []

  },



  getFoods() {

    let foods = [];

    for (let item of foodsData) {

      let food = this.createFood(item);

      foods.push(food)

    }

    return foods;

  },

  createFood(point) {

    let food = {

      id: point.id || 0,

      title: point.title || '',

      cover: point.cover,

      props: point.props

    };

    return food;

  },





  /**
 
   * 生命周期函数--监听页面加载
 
   */

  onLoad: function (options) {

    this.setData({

      foods: this.getFoods()

    })

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



  calling: function () {



  }

})