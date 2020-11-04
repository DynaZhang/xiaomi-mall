<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo">
        <a href="/index" />
      </div>
      <div class="title">
        <h2>
          {{title}}
          <slot name="tip"></slot>
        </h2>
      </div>
      <div class="username">
        <a href="javascript:void(0)">{{username}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    name: "order-header",
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    computed: {
      ...mapGetters({
        'userInfo': 'common/getUserInfo'
      }),
      username() {
        return this.userInfo.username
      }
    }
  }
</script>

<style scoped lang="scss">
@import "../assets/styles/base.scss";
@import "../assets/styles/config.scss";
@import "../assets/styles/mixin.scss";
.order-header {
  padding: 30px 0;
  .container {
    @include flex();
    .header-logo {
      float: left;
      width: 55px;
      height: 55px;
      background-color: $colorA;
      a {
        display: inline-block;
        width: 110px;
        height: 55px;
        &::before {
          content: ' ';
          @include bgImg(55px,55px,"../assets/imgs/mi-logo.png");
          transition: margin .2s;
        }
        &::after {
          content: ' ';
          @include bgImg(55px,55px,"../assets/imgs/mi-home.png");
        }
        &:hover:before {
          margin-left: -55px;
          transition: margin .2s;
        }
      }
    }
    .title {
      flex: 1;
      height: 55px;
      line-height: 55px;
      font-size: 28px;
      color: $colorB;
      margin-left: 54px;
      span {
        font-size: 14px;
        margin-left: 17px;
        color: $colorD;
        font-weight: bold;
      }
    }
    .username {
      a {
        color: $colorD;
        font-size: $fontI;
      }
    }
  }
}
</style>