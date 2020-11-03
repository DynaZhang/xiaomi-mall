<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'


export default {
  name: 'App',
  methods: {
    ...mapMutations({
      'setUserInfo': 'common/setUserInfo',
      'setCartCount': 'common/setCartCount'
    }),
    getUser() {
      this.axios.request({
        method: 'get',
        url: '/user'
      }).then(response => {
        this.setUserInfo(response)
      }).catch(error => {
        console.log(error)
      })
    },
    getCartCount() {
      this.axios.request({
        method: 'get',
        url: '/carts/products/sum'
      }).then(response => {
        this.setCartCount(response)
      }).catch(error => {
        console.log(error)
      })
    }
  },
  mounted() {
    this.getUser()
    this.getCartCount()
  }
}
</script>

<style lang="scss">

</style>
