<template>
  <div class="service-bar">
    <div class="container">
      <ul>
        <li><span class="icon-setting"></span>预约维修服务</li>
        <li><span class="icon-7days"></span>7天无理由退货</li>
        <li><span class="icon-15days"></span>15天免费换货</li>
        <li><span class="icon-post"></span>满150元包邮</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'service-bar'
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/base.scss";
@import "../assets/styles/config.scss";
@import "../assets/styles/mixin.scss";
.service-bar {
  .container {
    padding: 33px 0;
    color: $colorC;
    font-size: $fontI;
    li {
      display: inline-block;
      width: 24.9%;
      text-align: center;
      border-right: 1px solid $colorH;
      &:last-child {
        border-right: none;
      }
      span {
        display: inline-block;
        width: 20px;
        height: 20px;
        vertical-align: middle;
        margin-right: 8px;
      }
      .icon-setting {
        @include bgImg(20px,20px,'../assets/imgs/icon-setting.png')
      }
      .icon-7days {
        @include bgImg(20px,20px,'../assets/imgs/icon-7day.png')
      }
      .icon-15days {
        @include bgImg(20px,20px,'../assets/imgs/icon-15day.png')
      }
      .icon-post {
        @include bgImg(20px,20px,'../assets/imgs/icon-post.png')
      }
    }
  }
}
</style>