<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:void(0)">小米商城</a>
          <a href="javascript:void(0)">MIUI</a>
          <a href="javascript:void(0)">云服务</a>
          <a href="javascript:void(0)">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:void(0)" v-if="username">{{username}}</a>
          <a href="javascript:void(0)" v-if="username">我的订单</a>
          <a href="javascript:void(0)" v-if="!username" @click="handleGotoLogin">登录</a>
          <a href="javascript:void(0)" v-if="!username">注册</a>
          <a href="javascript:void(0)" class="my-cart" @click="handleGotoCart">
            <span class="icon-cart"></span>
            <span>购物车</span>
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li v-for="item in phoneList" :key="item.id" class="product">
                  <a :href="`/product/${item.id}`" target="_blank">
                    <div class="pro-img">
                      <img
                        :src="item.mainImage"
                        :alt="item.subTitle" />
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | currency}}元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>Redmi红米</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="javascript:void(0)" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/81808cd191332114f44d8d0cb0d0813a.png?thumb=1&w=320&h=220&f=webp&q=90"
                        alt="小米10至尊纪念版" />
                    </div>
                    <div class="pro-name">Redmi K30S 至尊纪念版</div>
                    <div class="pro-price">2399元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:void(0)" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/81808cd191332114f44d8d0cb0d0813a.png?thumb=1&w=320&h=220&f=webp&q=90"
                        alt="小米10至尊纪念版" />
                    </div>
                    <div class="pro-name">Redmi K30S 至尊纪念版</div>
                    <div class="pro-price">2399元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:void(0)" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/81808cd191332114f44d8d0cb0d0813a.png?thumb=1&w=320&h=220&f=webp&q=90"
                        alt="小米10至尊纪念版" />
                    </div>
                    <div class="pro-name">Redmi K30S 至尊纪念版</div>
                    <div class="pro-price">2399元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:void(0)" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/81808cd191332114f44d8d0cb0d0813a.png?thumb=1&w=320&h=220&f=webp&q=90"
                        alt="小米10至尊纪念版" />
                    </div>
                    <div class="pro-name">Redmi K30S 至尊纪念版</div>
                    <div class="pro-price">2399元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:void(0)" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/81808cd191332114f44d8d0cb0d0813a.png?thumb=1&w=320&h=220&f=webp&q=90"
                        alt="小米10至尊纪念版" />
                    </div>
                    <div class="pro-name">Redmi K30S 至尊纪念版</div>
                    <div class="pro-price">2399元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:void(0)" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/81808cd191332114f44d8d0cb0d0813a.png?thumb=1&w=320&h=220&f=webp&q=90"
                        alt="小米10至尊纪念版" />
                    </div>
                    <div class="pro-name">Redmi K30S 至尊纪念版</div>
                    <div class="pro-price">2399元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="javascript:void(0)" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e513ac03d0ebb594bf42f7d6b1b44944.png?thumb=1&w=320&h=220&f=webp&q=90"
                        alt="小米10至尊纪念版" />
                    </div>
                    <div class="pro-name">小米电视大师 82英寸</div>
                    <div class="pro-price">8999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:void(0)" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e513ac03d0ebb594bf42f7d6b1b44944.png?thumb=1&w=320&h=220&f=webp&q=90"
                        alt="小米10至尊纪念版" />
                    </div>
                    <div class="pro-name">小米电视大师 82英寸</div>
                    <div class="pro-price">8999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:void(0)" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e513ac03d0ebb594bf42f7d6b1b44944.png?thumb=1&w=320&h=220&f=webp&q=90"
                        alt="小米10至尊纪念版" />
                    </div>
                    <div class="pro-name">小米电视大师 82英寸</div>
                    <div class="pro-price">8999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:void(0)" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e513ac03d0ebb594bf42f7d6b1b44944.png?thumb=1&w=320&h=220&f=webp&q=90"
                        alt="小米10至尊纪念版" />
                    </div>
                    <div class="pro-name">小米电视大师 82英寸</div>
                    <div class="pro-price">8999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:void(0)" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e513ac03d0ebb594bf42f7d6b1b44944.png?thumb=1&w=320&h=220&f=webp&q=90"
                        alt="小米10至尊纪念版" />
                    </div>
                    <div class="pro-name">小米电视大师 82英寸</div>
                    <div class="pro-price">8999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:void(0)" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e513ac03d0ebb594bf42f7d6b1b44944.png?thumb=1&w=320&h=220&f=webp&q=90"
                        alt="小米10至尊纪念版" />
                    </div>
                    <div class="pro-name">小米电视大师 82英寸</div>
                    <div class="pro-price">8999元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:void(0)"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "nav-header",
    data() {
      return {
        username: 'jack',
        phoneList: []
      }
    },
    filters: {
      currency(val) {
        if (!val) {
          return '0.00'
        } else {
          return `￥${val.toFixed(2)}`
        }
      }
    },
    mounted() {
      this.getProductList()
    },
    methods: {
      handleGotoLogin() {
        this.$router.push({
          path: '/login'
        })
      },
      handleGotoCart() {
        this.$router.push({
          path: '/cart'
        })
      },
      getProductList() {
        this.axios.request({
          method: 'get',
          url: '/products',
          params: {
            categoryId: '100012'
          }
        }).then(response => {
          const list = response.list
          if (list.length >= 6) {
            this.phoneList = list.slice(0,6)
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "./src/assets/styles/config";
  @import "./src/assets/styles/base";
  @import "./src/assets/styles/mixin";
  .header {
    .nav-topbar {
      height: 39px;
      line-height: 39px;
      background-color: $colorB;
      color: #B0B0B0;
      .container {
        @include flex();
        a {
          display: inline-block;
          color: #B0B0B0;
          margin-right: 17px;
        }
        .my-cart {
          width: 110px;
          background-color: $colorA;
          text-align: center;
          color: $colorG;
          .icon-cart {
            display: inline-block;
            width: 16px;
            height: 12px;
            margin-right: 4px;
            background: url("../assets/imgs/icon-cart-checked.png") no-repeat center;
            background-size: contain;
          }
        }
      }
    }
    .nav-header {
      .container {
        @include flex();
        height: 112px;
        position: relative;
        .header-logo {
          display: inline-block;
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
        .header-menu {
          display:inline-block;
          flex: 1;
          padding-left:209px;
          .item-menu {
            display:inline-block;
            line-height:112px;
            color:$colorB;
            font-size:$fontI;
            font-weight:bold;
            margin-right:20px;
            span {
              cursor:pointer;
            }
            &:hover {
              color:$colorA;
              .children {
                height:220px;
                border-top:1px solid #E5E5E5;
                opacity:1;
              }
            }
            .children {
              position:absolute;
              top:112px;
              left:0;
              width:1226px;
              height:0;
              opacity:0;
              overflow: hidden;
              box-shadow:0 7px 6px 0 rgba(0,0,0,.11);
              z-index:10;
              transition:all .5s;
              background-color:#ffffff;
              .product {
                position:relative;
                float:left;
                width:16.6%;
                height:220px;
                font-size:12px;
                line-height:12px;
                text-align:center;
                a {
                  display:inline-block;
                }
                img {
                  width:auto;
                  height:111px;
                  margin-top:26px;
                }
                .pro-img {
                  height:137px;
                }
                .pro-name {
                  color:$colorB;
                  font-weight:bold;
                  margin-top:19px;
                  margin-bottom:8px;
                }
                .pro-price {
                  color:$colorA;
                }
                &:before{
                  content:' ';
                  position:absolute;
                  top:28px;
                  right:0;
                  border-left:1px solid $colorF;
                  height:100px;
                  width:1px;
                }
                &:last-child:before{
                  display:none;
                }
              }
            }
          }
        }
        .header-search {
          width: 319px;
          .wrapper {
            height: 50px;
            border: 1px solid #E0E0E0;
            display: flex;
            flex-direction: row;
            align-items: center;
            input {
              border: none;
              border-right: 1px solid #E0E0E0;
              padding: 0 14px;
              width: 264px;
              height: 50px;
              box-sizing: border-box;
            }
            a {
              margin: 18px;
              @include bgImg(18px,18px,"../assets/imgs/icon-search.png")
            }
          }
        }
      }
    }
  }
</style>
