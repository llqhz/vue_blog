import Vue from 'vue'

export default {
  namespaced: true,
  state: {
    // 相当于 data
    swiperImages: [],
  },
  getters: {
    swiperImages(state, getters) {
      return state.swiperImages.map((item, index, arr) => {
        item.img_mode = item.img_mode || 'default'
        return item
      })
    }
  },
  mutations: {
    // 突变: 相当于 computed 事件名称
    swiperImages(state, images) {
      if (images) {
        state.swiperImages = images
      }
    },
    setSwiperImagesMode(state, image) {
      if (image && state.swiperImages[image.index]) {
        // 注意数组和对象数据更改检测
        state.swiperImages[image.index].img_mode = image.img_mode
        Vue.set(state.swiperImages, image.index, state.swiperImages[image.index])
      }
    }
  },
  actions: {
    // 相当于 methods , 异步请求
    getSwiperImage(context) {
      // context: { commit,dispatch,state }
    },
    updateSwiperImages({ commit, state, rootGetters }, payload) {
      // 只能通过提交触发mutations才能改变数据
      // setTimeout(() => {
      //   let g = rootGetters
      //   console.log(g)
      //   var images = [{
      //     id: 1,
      //     src: 'https://img1.qunarzz.com/piao/fusion/1806/ee/b889bce65d6dcf02.jpg_750x200_b1cb6a9f.jpg'
      //   },
      //   {
      //     id: 2,
      //     src: 'https://img1.qunarzz.com/piao/fusion/1808/74/cad6bf966300902.jpg_750x200_7641ba93.jpg'
      //   }];
      //   commit('swiperImages', images)
      // }, 2000);
    }
  }
}