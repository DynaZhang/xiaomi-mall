export default {
  namespaced: true,
  state: {
    userInfo: {},
    cartCount: 0
  },
  getters: {
    getUserInfo: state => state.userInfo,
    getCartCount: state => state.cartCount
  },
  mutations: {
    setUserInfo: (state, userInfo) => {
      state.userInfo = userInfo
    },
    setCartCount: (state,cartCount) => {
      state.cartCount = cartCount
    }
  },
  actions: {}
}