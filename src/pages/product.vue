<template>
  <div class="product">
    <product-param :title="productInfo.name">
      <template slot="buy">
        <div class="btn" @click="handleBuy">立即购买</div>
      </template>
    </product-param>
    <div class="content">
      <div class="item-bg">
        <h2>{{productInfo.name}}</h2>
        <h3>{{productInfo.subtitle}}</h3>
        <p>
          <a href="" id="">全球首款双频 GP</a>
          <span>|</span>
          <a href="" id="">骁龙845</a>
          <span>|</span>
          <a href="" id="">AI 变焦双摄</a>
          <span>|</span>
          <a href="" id="">红外人脸识别</a>
        </p>
        <div class="price">
          <span>￥<em>{{productInfo.price}}</em></span>
        </div>
      </div>
      <div class="item-bg-2"></div>
      <div class="item-bg-3"></div>
      <div class="item-swiper">
        <swiper :options="swiperOption">
          <swiper-slide><img src="../assets/imgs/product/gallery-2.png" alt=""></swiper-slide>
          <swiper-slide><img src="../assets/imgs/product/gallery-3.png" alt=""></swiper-slide>
          <swiper-slide><img src="../assets/imgs/product/gallery-4.png" alt=""></swiper-slide>
          <swiper-slide><img src="../assets/imgs/product/gallery-5.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="../assets/imgs/product/gallery-6.jpg" alt=""></swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <p class="desc">小米8 AI变焦双摄拍摄</p>
      </div>
      <div class="item-video">
        <h2>60帧超慢动作摄影<br/>慢慢回味每一瞬间的精彩</h2>
        <p>后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br/>更能AI 精准分析视频内容，15个场景智能匹配背景音效。</p>
        <div class="video-bg" @click="showSlide = 'slide-down'"></div>
        <div class="video-box">
          <div class="overlay" v-if="showSlide === 'slide-down'"></div>
          <div class="video" :class="{'slide-down': showSlide === 'slide-down', 'slide-up': showSlide === 'slide-up'}">
            <span class="icon-close" @click="handleCloseVideo"></span>
            <video src="../assets/imgs/product/video.mp4" muted autoplay controls="controls"></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductParam from '../components/ProductParam'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
  name: "product",
  components: {ProductParam,swiper,swiperSlide},
  data() {
    return {
      showSlide: '',
      swiperOption: {
        autoplay:true,
        slidesPerView:3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable :true,
        }
      },
      productInfo: {}
    }
  },
  methods: {
    getProductInfo() {
      const {id} = this.$route.params
      this.axios.request({
        method: 'get',
        url: '/products/' + id
      }).then(response => {
        this.productInfo = response
      }).catch(error => {
        console.log(error)
      })
    },
    handleBuy() {
      const {id} = this.$route.params
      this.$router.push(`/detail/${id}`)
    },
    handleCloseVideo() {
      this.showSlide = 'slide-up'
      setTimeout(() => {
        this.showSlide = ''
      }, 600)
    }
  },
  mounted() {
    this.getProductInfo()
  }
}
</script>

<style scoped lang="scss">
@import "../assets/styles/config.scss";
@import "../assets/styles/button.scss";
@import "../assets/styles/base.scss";
@import "../assets/styles/mixin.scss";
.btn {
  margin-left: 11px;
}
.product {
  .content{
    .item-bg{
      background:url('../assets/imgs/product/product-bg-1.png') no-repeat center;
      height:718px;
      text-align:center;
      h2{
        font-size:80px;
        padding-top:55px;
      }
      h3{
        font-size:24px;
        letter-spacing: 10px;
      }
      p{
        margin-top:21px;
        margin-bottom:40px;
        a{
          font-size:16px;
          color:#333333;
        }
        span{
          margin:0 15px;
        }
      }
      .price{
        font-size:30px;
        color:#333333;
        em{
          font-style:normal;
          font-size:38px;
        }
      }
    }
    .item-bg-2{
      background:url("../assets/imgs/product/product-bg-2.png") no-repeat center;
      height:480px;
      background-size:1226px 397px;
    }
    .item-bg-3{
      background:url("../assets/imgs/product/product-bg-3.png") no-repeat center;
      height:638px;
      background-size:cover;
    }
    .item-swiper{
      margin:36px auto 52px;
      .desc{
        font-size:18px;
        color:#333333;
        text-align:center;
      }
      img{
        width:100%;
      }
    }
    .item-video{
      height:1044px;
      background-color:#070708;
      margin-bottom:76px;
      color:#FFFFFF;
      text-align:center;
      h2{
        font-size:60px;
        padding-top:82px;
        margin-bottom:47px;
      }
      p{
        font-size:24px;
        margin-bottom:58px;
      }
      .video-bg{
        background:url('../assets/imgs/product/gallery-1.png') no-repeat center;
        background-size:cover;
        width:1226px;
        height:540px;
        margin:0 auto 120px;
        cursor:pointer;
      }
      .video-box{
        
        .overlay{
          @include position(fixed);
          background-color:#333333;
          opacity:.4;
          z-index:10;
        }
        .video{
          position:fixed;
          top:-50%;
          left:50%;
          transform:translate(-50%,-50%);
          z-index:10;
          width:1000px;
          height:536px;
          opacity: 0;
          transition: top .6s,opacity .6s;
          /* &.slide {
            top: 50%;
            opacity: 1;
          } */
          &.slide-down {
            animation: slide-down .6s linear;
            top: 50%;
            opacity: 1;
          }
          &.slide-up {
            animation: slide-up .6s linear;
            top: -50%;
            opacity: 0;
          }
          @keyframes slide-down {
            from {
              top: -50%;
              opacity: 0;
            }
            to {
              top: 50%;
              opacity: 1;
            }
          }
          @keyframes slide-up {
            from {
              top: 50%;
              opacity: 1;
            }
            to {
              top: -50%;
              opacity: 0;
            }
          }
          .icon-close{
            position:absolute;
            top:20px;
            right:20px;
            @include bgImg(20px,20px,'../assets/imgs/icon-close.png');
            cursor:pointer;
            z-index:11;
          }
          video{
            width:100%;
            height:100%;
            object-fit:cover;
            outline:none;
          }
        }
      }
    }
  }
  button{
    margin-left:10px;
  }
}
</style>
