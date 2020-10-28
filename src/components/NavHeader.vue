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
          <a href="javascript:void(0)">登录</a>
          <a href="javascript:void(0)">注册</a>
          <a href="javascript:void(0)" class="my-cart">
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
                        :alt="item.name" />
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price}}元</div>
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
<!--          <div class="item-menu">-->
<!--            <span>电视</span>-->
<!--            <div class="children">-->
<!--              <ul>-->
<!--                <li class="product">-->
<!--                  <a href="javascript:void(0)" target="_blank">-->
<!--                    <div class="pro-img">-->
<!--                      <img-->
<!--                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e513ac03d0ebb594bf42f7d6b1b44944.png?thumb=1&w=320&h=220&f=webp&q=90"-->
<!--                        alt="小米10至尊纪念版" />-->
<!--                    </div>-->
<!--                    <div class="pro-name">小米电视大师 82英寸</div>-->
<!--                    <div class="pro-price">8999元</div>-->
<!--                  </a>-->
<!--                </li>-->
<!--                <li class="product">-->
<!--                  <a href="javascript:void(0)" target="_blank">-->
<!--                    <div class="pro-img">-->
<!--                      <img-->
<!--                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e513ac03d0ebb594bf42f7d6b1b44944.png?thumb=1&w=320&h=220&f=webp&q=90"-->
<!--                        alt="小米10至尊纪念版" />-->
<!--                    </div>-->
<!--                    <div class="pro-name">小米电视大师 82英寸</div>-->
<!--                    <div class="pro-price">8999元</div>-->
<!--                  </a>-->
<!--                </li>-->
<!--                <li class="product">-->
<!--                  <a href="javascript:void(0)" target="_blank">-->
<!--                    <div class="pro-img">-->
<!--                      <img-->
<!--                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e513ac03d0ebb594bf42f7d6b1b44944.png?thumb=1&w=320&h=220&f=webp&q=90"-->
<!--                        alt="小米10至尊纪念版" />-->
<!--                    </div>-->
<!--                    <div class="pro-name">小米电视大师 82英寸</div>-->
<!--                    <div class="pro-price">8999元</div>-->
<!--                  </a>-->
<!--                </li>-->
<!--                <li class="product">-->
<!--                  <a href="javascript:void(0)" target="_blank">-->
<!--                    <div class="pro-img">-->
<!--                      <img-->
<!--                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e513ac03d0ebb594bf42f7d6b1b44944.png?thumb=1&w=320&h=220&f=webp&q=90"-->
<!--                        alt="小米10至尊纪念版" />-->
<!--                    </div>-->
<!--                    <div class="pro-name">小米电视大师 82英寸</div>-->
<!--                    <div class="pro-price">8999元</div>-->
<!--                  </a>-->
<!--                </li>-->
<!--                <li class="product">-->
<!--                  <a href="javascript:void(0)" target="_blank">-->
<!--                    <div class="pro-img">-->
<!--                      <img-->
<!--                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e513ac03d0ebb594bf42f7d6b1b44944.png?thumb=1&w=320&h=220&f=webp&q=90"-->
<!--                        alt="小米10至尊纪念版" />-->
<!--                    </div>-->
<!--                    <div class="pro-name">小米电视大师 82英寸</div>-->
<!--                    <div class="pro-price">8999元</div>-->
<!--                  </a>-->
<!--                </li>-->
<!--                <li class="product">-->
<!--                  <a href="javascript:void(0)" target="_blank">-->
<!--                    <div class="pro-img">-->
<!--                      <img-->
<!--                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e513ac03d0ebb594bf42f7d6b1b44944.png?thumb=1&w=320&h=220&f=webp&q=90"-->
<!--                        alt="小米10至尊纪念版" />-->
<!--                    </div>-->
<!--                    <div class="pro-name">小米电视大师 82英寸</div>-->
<!--                    <div class="pro-price">8999元</div>-->
<!--                  </a>-->
<!--                </li>-->
<!--              </ul>-->
<!--            </div>-->
<!--          </div>-->
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
    mounted() {
      this.getProductList()
    },
    methods: {
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
          &:last-child {
            margin-right: 0;
          }
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
        line-height: 112px;
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
          display: inline-block;
          padding-left: 209px;
          flex: 1;
          .item-menu {
            display: inline-block;
            width: 100px;
            color: $colorB;
            font-size: $fontI;
            font-weight: bold;
            margin-right: 20px;
            span {
              cursor: pointer;
            }
            &:hover {
              color: $colorA;
              .children {
                height: 220px;
                opacity: 1;
                transition: all .5s;
              }
            }
            .children {
              position: absolute;
              top: 112px;
              left: 0;
              width: 1226px;
              height: 0;
              opacity: 0;
              border-top: 1px solid #E5E5E5;
              box-shadow: 0 7px 6px 0 rgba(0,0,0,.11);
              z-index: 10;
              transition: all .5s;
              .product {
                float: left;
                width: 16.66%;
                height: 220px;
                font-size: 12px;
                line-height: 12px;
                text-align: center;
                a {
                  display: inline-block;
                }
                .pro-img {
                  height: 137px;
                  img {
                    width: auto;
                    height: 111px;
                    margin-top: 26px;
                    border-right: 1px solid $colorF;
                  }
                }
                .pro-name {
                  color: $colorB;
                  font-weight: bold;
                  margin: 19px 0 8px 0;
                }
                .pro-price {
                  color: $colorA;
                }
                &:last-child {
                  .pro-img {
                    img {
                      border-right: none;
                    }
                  }
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
