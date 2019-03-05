let foodsData = require('../../resources/dinning')

Page({



  /**
 
   * 页面的初始数据
 
   */

  data: {

    food: {}

  },



  getFood(point) {

    let food = {

      id: point.id || 0,

      title: point.title || '',

      cover: point.cover,

      props: this.getProps(point.props)

    };

    return food;

  },

  getProps(point) {

    let props = []

    point.forEach((e) => {

      let prop = {

        name: e.name,

        img: e.img,

        price: e.price

      }

      props.push(prop)

    })

    return props

  },

  /**
 
   * 生命周期函数--监听页面加载
 
   */

  onLoad: function (options) {

    foodsData.forEach((e) => {

      if (e.id == options.id) {

        this.setData({

          food: this.getFood(e)

        })

      }

    })

    console.log(this.data.food)

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