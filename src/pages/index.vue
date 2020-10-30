<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:void(0)">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item,index) in menuList" :key="index">
                  <li v-for="(sub,index) in item" :key="index">
                    <a :href="'/product/' + (item.id || 30) ">
                      <img :src="sub.img || require('../assets/imgs/item-box-3.jpg')" alt="" />
                      {{sub.name || '小米9'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:void(0)">电视 盒子</a>
              <div class="children">
                <ul v-for="(item,index) in menuList" :key="index">
                  <li v-for="(sub,index) in item" :key="index">
                    <a :href="'/product/' + (item.id || 30) ">
                      <img :src="sub.img || require('../assets/imgs/item-box-3.jpg')" alt="" />
                      {{sub.name || '小米9'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:void(0)">笔记本 平板</a>
              <div class="children">
                <ul v-for="(item,index) in menuList" :key="index">
                  <li v-for="(sub,index) in item" :key="index">
                    <a :href="'/product/' + (item.id || 30) ">
                      <img :src="sub.img || require('../assets/imgs/item-box-3.jpg')" alt="" />
                      {{sub.name || '小米9'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:void(0)">家电 插线板</a>
              <div class="children">
                <ul v-for="(item,index) in menuList" :key="index">
                  <li v-for="(sub,index) in item" :key="index">
                    <a :href="'/product/' + (item.id || 30) ">
                      <img :src="sub.img || require('../assets/imgs/item-box-3.jpg')" alt="" />
                      {{sub.name || '小米9'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:void(0)">出行 穿戴</a>
              <div class="children">
                <ul v-for="(item,index) in menuList" :key="index">
                  <li v-for="(sub,index) in item" :key="index">
                    <a :href="'/product/' + (item.id || 30) ">
                      <img :src="sub.img || require('../assets/imgs/item-box-3.jpg')" alt="" />
                      {{sub.name || '小米9'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:void(0)">智能 路由器</a>
              <div class="children">
                <ul v-for="(item,index) in menuList" :key="index">
                  <li v-for="(sub,index) in item" :key="index">
                    <a :href="'/product/' + (item.id || 30) ">
                      <img :src="sub.img || require('../assets/imgs/item-box-3.jpg')" alt="" />
                      {{sub.name || '小米9'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:void(0)">电源 配件</a>
              <div class="children">
                <ul v-for="(item,index) in menuList" :key="index">
                  <li v-for="(sub,index) in item" :key="index">
                    <a :href="'/product/' + (item.id || 30) ">
                      <img :src="sub.img || require('../assets/imgs/item-box-3.jpg')" alt="" />
                      {{sub.name || '小米9'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:void(0)">生活 箱包</a>
              <div class="children">
                <ul v-for="(item,index) in menuList" :key="index">
                  <li v-for="(sub,index) in item" :key="index">
                    <a :href="'/product/' + (item.id || 30) ">
                      <img :src="sub.img || require('../assets/imgs/item-box-3.jpg')" alt="" />
                      {{sub.name || '小米9'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <swiper ref="indexSwiper" :options="swiperOptions">
          <swiper-slide v-for="(item,index) in slideList" :key="index">
            <a :href="item.id ? '/product/' + item.id : 'javascript:void(0)'">
              <img :src="item.img ? item.img : require('../assets/imgs/item-box-1.png')" alt="">
            </a>
          </swiper-slide>

          <div class="swiper-pagination" slot="pagination" />
          <div class="swiper-button-prev" slot="button-prev" />
          <div class="swiper-button-next" slot="button-next" />
        </swiper>
      </div>
      <div class="ads-box">
        <a v-for="item in adsList" :key="item.id" :href="'/product/' + item.id">
          <img :src="item.img" alt="" />
        </a>
      </div>
      <div class="banner">
        <a href="/product/30">
          <img src="../assets/imgs/banner-1.png" alt="" />
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/product/35">
              <img src="../assets/imgs/mix-alpha.jpg" alt="" />
            </a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(item,i) in phoneList" :key="i">
              <div class="item" v-for="(sub,j) in item" :key="j">
                <span class="tag" :class="{'new-pro': j%2===0, 'kill-pro': j%2===1}">新品</span>
                <div class="item-img">
                  <img :src="sub.mainImage" alt="">
                </div>
                <div class="item-info">
                  <h3>{{sub.name}}</h3>
                  <p>{{sub.subtitle}}</p>
                  <p class="price">{{sub.price}}元</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar />
  </div>
</template>

<script>
  import ServiceBar from '../components/ServiceBar'
  import {swiper,swiperSlide} from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'
  export default {
    name: "index",
    components: {
      swiper,
      swiperSlide,
      ServiceBar
    },
    data () {
      return {
        swiperOptions:{
          autoplay:true,
          loop:true,
          effect:'cube',
          cubeEffect: {
            shadowOffset: 100,
            shadowScale: 0.6
          },
          pagination: {
            el: '.swiper-pagination',
            clickable:true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        },
        slideList: [
          {
            id: '42',
            img: require('../assets/imgs/slider/slide-1.jpg')
          },
          {
            id: '45',
            img: require('../assets/imgs/slider/slide-2.jpg')
          },
          {
            id: '46',
            img: require('../assets/imgs/slider/slide-3.jpg')
          },
          {
            id: '',
            img: require('../assets/imgs/slider/slide-4.jpg')
          },
          {
            id: '',
            img: require('../assets/imgs/slider/slide-5.jpg')
          }
        ],
        menuList: [
          [
            {
              id: 30,
              img: require('../assets/imgs/item-box-1.png'),
              name: '小米CC9'
            },
            {
              id: 31,
              img: require('../assets/imgs/item-box-2.png'),
              name: '小米8青春版'
            },
            {
              id: 32,
              img: require('../assets/imgs/item-box-3.jpg'),
              name: 'Redmi K20 Pro'
            },
            {
              id: 33,
              img: require('../assets/imgs/item-box-4.jpg'),
              name: '移动4G+专区'
            }
          ],
          [0,0,0,0],
          [0,0,0,0],
          [0,0,0,0],
          [0,0,0,0],
          [0,0,0,0]
        ],
        adsList: [
          {
            id: 33,
            img: require('../assets/imgs/ads/ads-1.png')
          },
          {
            id: 48,
            img: require('../assets/imgs/ads/ads-2.jpg')
          },
          {
            id: 45,
            img: require('../assets/imgs/ads/ads-3.png')
          },
          {
            id: 47,
            img: require('../assets/imgs/ads/ads-4.jpg')
          }
        ],
        phoneList: []
      }
    },
    methods: {
      getProductList() {
        this.axios.request({
          method: 'get',
          url: '/products',
          params: {
            categoryId: 100012,
            pageSize: 8
          }
        }).then(response => {
          this.phoneList = [
            response.list.slice(0,4),
            response.list.slice(4,8)
          ]
          console.log(this.phoneList)
        }).catch(error => {
          console.log(error)
        })
      }
    },
    mounted () {
      this.getProductList()
    }
  }
</script>

<style scoped lang="scss">
@import "../assets/styles/base.scss";
@import "../assets/styles/config.scss";
@import "../assets/styles/mixin.scss";
  .index {
    .swiper-box {
      position: relative;
      .nav-menu {
        position: absolute;
        top: 0;
        left: 0;
        width: 264px;
        height: 100%;
        z-index: 10;
        padding: 26px 0;
        background-color: rgba(55,58,90,.5);
        box-sizing: border-box;
        .menu-wrap {
          .menu-item {
            height: 50px;
            line-height: 50px;
            a {
              position: relative;
              display: block;
              padding-left: 30px;
              font-size: $fontI;
              color: $colorG;
              &::after {
                content: ' ';
                position: absolute;
                top: 17.5px;
                right: 30px;
                width: 10px;
                height: 15px;
                @include bgImg(10px,15px,"../assets/imgs/icon-arrow.png")
              }
            }
            &:hover {
              background-color: $colorA;
              .children {
                display: block;
              }
            }
            .children {
              position: absolute;
              top: 0;
              left: 264px;
              display: none;
              width: 962px;
              height: 451px;
              background-color: $colorG;
              border: 1px solid $colorH;
              ul {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                height: 75px;
                li {
                  height: 75px;
                  line-height: 75px;
                  flex: 1;
                  padding-left: 23px;
                }
                a {
                  color: $colorB;
                  font-size: 14px;
                }
                img {
                  width: 42px;
                  height: 35px;
                  vertical-align: middle;
                  margin-right: 15px;
                }
              }
            }
          }
        }
      }
      .swiper-container {
        height: 451px;
        img {
          width: 100%;
          height: 100%;
        }
        .swiper-button-prev {
          left: 274px;
        }
      }
    }
    .ads-box {
      @include flex();
      margin-top: 14px; 
      margin-bottom: 31px;
      a {
        width: 296px;
        height: 167px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .banner {
      margin-bottom: 50px;
    }
    .product-box {
      background-color: $colorJ;
      padding: 30px 0 50px;
      h2 {
        font-size: $fontF;
        height: 21px;
        line-height: 21px;
        color: $colorB;
        margin-bottom: 18px;
      }
      .wrapper {
        display: flex;
        .banner-left {
          margin-right: 16px;
          img {
            width: 224px;
            height: 619px;
          }
        }
        .list-box {
          flex: 1;
          .list {
            @include flex();
            width: 100%;
            margin-bottom: 14px;
            &:last-child {
              margin-bottom: 0;
            }
            .item {
              width: 236px;
              height: 302px;
              background-color: $colorG;
              text-align: center;
              .tag {
                display: inline-block;
                width: 67px;
                height: 24px;
                color: $colorG;
                &.new-pro {
                  background-color: #7ECF68;
                }
                &.kill-pro {
                  background-color: #E82626;
                }
              }
              .item-img {
                img {
                  width: 100%;
                  height: 195px;
                }
              }
              .item-info {
                h3 {
                  color: $colorB;
                  font-size: $fontJ;
                  line-height: $fontJ;
                  font-weight: bold;
                }
                p {
                  color: $colorD;
                  line-height: 13px;
                  margin: 6px auto 13px;
                  &.price {
                    color: #F20A0A;
                    font-size: $fontJ;
                    font-weight: bold;
                    cursor: pointer;
                    &::after {
                      content: ' ';
                      vertical-align: middle;
                      margin-left: 8px;
                      @include bgImg(22px,22px,'../assets/imgs/icon-cart-hover.png');
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
