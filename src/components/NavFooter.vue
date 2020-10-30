<template>
  <div class="nav-footer">
    <div class="footer-logo">
      <img src="../assets/imgs/logo-footer.png" alt="xiaomi" />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://www.imooc.com/u/1343480">河畔一角主页</a><span>|</span>
      <a href="https://coding.imooc.com/class/113.html">Vue全栈课程</a><span>|</span>
      <a href="https://coding.imooc.com/class/236.html">React全家桶课程</a><span>|</span>
      <a href="https://coding.imooc.com/class/343.html">微信支付专项课程（H5+小程序+Node+Mongo）</a>
    </div>
    <div class="copyright">
      Copyright ©2020 <span class="domain">mi.futurefe.com</span> All Rights Reserved.
    </div>
  </div>
</template>

<script>
  export default {
    name: "nav-footer"
  }
</script>

<style scoped lang="scss">
@import "./src/assets/styles/config";
@import "./src/assets/styles/mixin";
.nav-footer {
  width: 100%;
  height: 234px;
  border-top: 4px solid $colorA;
  background-color: $colorB;
  color: $colorD;
  font-size: 16px;
  text-align: center;
  @include flex(column,center,center);
  .footer-logo {
    margin-bottom: 31px;
    img {
      margin-bottom: 13px;
      width: 53px;
      height: 36px;
    }
  }
  .footer-link {
    margin-bottom: 13px;
    a {
      color: $colorD;
      margin: 0 8px;
    }
  }
  .copyright {
    .domain {
      color: $colorA;
    }
  }
}
</style>
