<template>
  <div>
    <order-header :title="pageTitle">
      <template slot="tip">
        <span>{{tip}}</span>
      </template>
    </order-header>
    <router-view />
    <service-bar />
    <nav-footer />
  </div>
</template>

<script>
  import OrderHeader from "@/components/OrderHeader";
  import NavFooter from "@/components/NavFooter";
  import ServiceBar from '@/components/ServiceBar'
  export default {
    name: "order",
    components: {OrderHeader, NavFooter, ServiceBar},
    data () {
      return {
        pageTitle: '',
        tip: ''
      }
    },
    mounted() {
      const path = this.$route.path
      switch(path) {
        case '/order/list': this.pageTitle = '订单列表'; this.tip = '请谨防钓鱼链接或诈骗电话,了解更多>'; break;
        case '/order/confirm': this.pageTitle = '订单确认'; this.tip = '请认真填写收货地址'; break;
        case 'order/pay': this.pageTitle = '支付订单'; this.tip = '请谨防钓鱼链接或诈骗电话,了解更多>'; break;
        case 'order/alipay': this.pageTitle = '支付宝'; break;
        default: break;
      }
    }
  }
</script>

<style scoped>

</style>
