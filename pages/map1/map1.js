let markersData = require('../../resources/gis-marker')

Page({



  /**
 
   * 页面的初始数据
 
   */

  data: {

    centerX: '',

    centerY: '',

    markers: [],

    controls: [

      {

        id: 1,

        iconPath: '../../assets/icons/12.png',

        position: {

          left: 10,

          top: 10,

          width: 30,

          height: 30

        },

        clickable: true

      }

    ]

  },

  markertap(e) {



  },

  callouttap(e) {

    let latitude = 0

    let longitude = 0

    let name = ''

    markersData.forEach((f) => {

      if (f.id == e.markerId) {

        latitude = f.latitude

        longitude = f.longitude

        name = f.name

      }

    })

    wx.openLocation({//​使用微信内置地图查看位置。

      latitude: latitude,//要去的纬度-地址

      longitude: longitude,//要去的经度-地址

      name: name,

    })

  },

  controltap(e) {

    console.log(e.controlId)

    this.moveToLocation()

  },

  getMarkers() {

    let markers = [];

    for (let item of markersData) {

      let marker = this.createMarker(item);

      markers.push(marker)

    }

    return markers;

  },

  moveToLocation() {

    this.mapCtx.moveToLocation()

  },

  createMarker(point) {

    let latitude = point.latitude;

    let longitude = point.longitude;

    let marker = {

      iconPath: "../../assets/icons/11.png",

      id: point.id || 0,

      name: point.name || '',

      latitude: latitude,

      longitude: longitude,

      width: 40,

      height: 40

    };

    return marker;

  },

  /**
 
   * 生命周期函数--监听页面加载
 
   */

  onLoad: function (options) {

    wx.getLocation({

      type: 'gcj02', //返回可以用于wx.openLocation的经纬度

      success: (res) => {

        let latitude = res.latitude;

        let longitude = res.longitude;

        let marker = this.createMarker(res);

        this.setData({

          centerX: longitude,

          centerY: latitude,

          markers: this.getMarkers()

        })

      }

    });

  },



  /**
 
   * 生命周期函数--监听页面初次渲染完成
 
   */

  onReady: function () {

    this.mapCtx = wx.createMapContext('map')



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