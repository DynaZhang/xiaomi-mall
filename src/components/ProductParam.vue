<template>
  <div class="nav-bar" :class="{'is-fixed': isFixed}">
    <div class="container">
      <div class="pro-title">{{title}}</div>
      <div class="pro-param">
        <a href="javascript:void(0)">概述</a><span>|</span>
        <a href="javascript:void(0)">参数</a><span>|</span>
        <a href="javascript:void(0)">用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isFixed: false
    }
  },
  methods: {
    initHeight() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.isFixed = scrollTop > 152
    }
  },
  mounted() {
    window.addEventListener('scroll', this.initHeight)
  },
  destroyed() {
    window.removeEventListener('scroll', this.initHeight, false)
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/base.scss";
@import "../assets/styles/config.scss";
@import "../assets/styles/mixin.scss";
.nav-bar {
  height: 70px;
  line-height: 70px;
  border-top: 1px solid $colorH;
  background-color: $colorG;
  box-shadow: 0 5px 5px $colorE;
  .container {
    @include flex();
    .pro-title {
      font-size: $fontH;
      color: $colorB;
      font-weight: bold;
    }
    .pro-param {
      span {
        margin: 0 11px;
      }
      a {
        font-size: $fontJ;
        color: $colorC;
      }
    }
  }
  &.is-fixed {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
  }
}
</style>