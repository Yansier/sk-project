<template>
  <goods-nav :show-icons="false" />
  <section class="banner">
    <section class="bannerInfo">
      <div class="iconBox">
        <img src="/favicon.png" alt="">
      </div>
      <div class="main">
        <p class="title">
          SilkRoad Store
          <img src="@/portal/assets/svip.png" alt="" height="16" width="29">
        </p>
        <div class="data">
          <span>New 100</span>
          <span>Total 10000</span>
        </div>
      </div>
    </section>
  </section>
  <section class="notice">
    <section class="notice-notice">
      For detailed price and specification, please contact our company on WhatsApp! 🥰<br>
      Professional team is always at your service! 😘<br>
      Only the WhatsApp entrance on this page<br>
      ⚠All others may receive fraud⚠
    </section>
  </section>
  <section class="decorateSwiper">
    <swiper :pagination="true" :modules="modules" :loop="true" class="swiper-container" :autoplay="{delay: 2000}">
      <swiper-slide>
        <a href="javascript:void(0)">
          <img loading="lazy" src="@/portal/assets/store/banner1.webp" />
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="javascript:void(0)">
          <img loading="lazy" src="@/portal/assets/store/banner2.webp" />
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="javascript:void(0)">
          <img loading="lazy" src="@/portal/assets/store/banner3.webp" />
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="javascript:void(0)">
          <img loading="lazy" src="@/portal/assets/store/banner4.webp" />
        </a>
      </swiper-slide>
    </swiper>
  </section>
<!--  <section class="decorateNav">-->
<!--    <section class="decorateNav-list">-->
<!--      <a href="" class="decorateNav-item">-->
<!--        <div class="decorateNav-imageBox">-->
<!--          <img class="Image_Image__NdcLd DecorateNav_image__5jO3x" loading="lazy" src="https://xcimg.szwego.com/wsxcWeb/1b289992/o_1i8pdl5bt1f2m164n1qn6l6v1i3t1g.png">-->
<!--        </div>-->
<!--        <div class="decorateNav_label">Loui</div>-->
<!--      </a>-->
<!--    </section>-->
<!--  </section>-->
  <section class="DecoratePoster" v-if="allData.length">
    <div class="DecoratePoster-title">
      {{ allData[0].categoryName }}
    </div>
    <swiper class="posterSwiper">
      <swiper-slide v-for="item in allData[0].products" :key="item.goodsId">
        <a :href="`/#/#/goods/${item.goodsId}`">
          <div class="zhengfangxing">
            <div class="zhengfangxing-child">
              <img loading="lazy" :src="item.imgSrc" alt="">
            </div>
          </div>
        </a>
      </swiper-slide>
    </swiper>
  </section>

  <section class="DecoratePoster" v-if="allData.length">
    <div class="DecoratePoster-title">
      {{ allData[1].categoryName }}
    </div>
    <swiper class="posterSwiper2">
      <swiper-slide v-for="item in allData[1].products" :key="item.goodsId">
        <a :href="`/#/goods/${item.goodsId}`">
          <div class="zhengfangxing">
            <div class="zhengfangxing-child">
              <img loading="lazy" :src="item.imgSrc" alt="">
            </div>
          </div>
          <div class="info">
            <div class="ellipsis-two word-break">
              {{ item.title }}
            </div>
          </div>
        </a>
      </swiper-slide>
    </swiper>
  </section>

  <section class="decorateSwiper">
    <swiper :pagination="true" :modules="modules" class="swiper-container" :autoplay="{delay: 2000}" :loop="true">
      <swiper-slide>
        <a href="javascript:void(0)">
          <img loading="lazy" src="@/portal/assets/store/banner5.webp" />
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="javascript:void(0)">
          <img loading="lazy" src="@/portal/assets/store/banner6.webp" />
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="javascript:void(0)">
          <img loading="lazy" src="@/portal/assets/store/banner7.webp" />
        </a>
      </swiper-slide>
    </swiper>
  </section>

<!--  <section class="decorateNav">-->
<!--    <section class="decorateNav-list">-->
<!--      <a href="" class="decorateNav-item">-->
<!--        <div class="decorateNav-imageBox">-->
<!--          <img class="Image_Image__NdcLd DecorateNav_image__5jO3x" loading="lazy" src="https://xcimg.szwego.com/wsxcWeb/1b289992/o_1i8pdl5bt1f2m164n1qn6l6v1i3t1g.png">-->
<!--        </div>-->
<!--        <div class="decorateNav_label">Loui</div>-->
<!--      </a>-->
<!--    </section>-->
<!--  </section>-->

  <section class="DecoratePoster" v-if="allData.length">
    <div class="DecoratePoster-title">
      {{ allData[6].categoryName }}
    </div>
    <section class="padding-horizontal">
      <section class="PosterGrid_box">
        <a class="float-left w-2/3" :href="`/#/goods/${allData[6].products[0].goodsId}`">
          <div>
            <div class="zhengfangxing">
              <div class="zhengfangxing-child">
                <img loading="lazy" :src="allData[6].products[0].imgSrc" alt="">
              </div>
            </div>
          </div>
        </a>
        <a class="float-left w-1/3 h-1/2" :href="`/#/goods/${allData[6].products[1].goodsId}`">
          <div>
            <div class="zhengfangxing">
              <div class="zhengfangxing-child">
                <img loading="lazy" :src="allData[6].products[1].imgSrc" alt="">
              </div>
            </div>
          </div>
        </a>
        <a class="float-left w-1/3 h-1/2" :href="`/#/goods/${allData[6].products[2].goodsId}`">
          <div>
            <div class="zhengfangxing">
              <div class="zhengfangxing-child">
                <img loading="lazy" :src="allData[6].products[2].imgSrc" alt="">
              </div>
            </div>
          </div>
        </a>
      </section>
    </section>
  </section>

  <section class="DecoratePoster" v-if="allData.length">
    <section class="DecoratePoster-title">
      {{ allData[2].categoryName }}
    </section>
    <section class="padding-horizontal DecorateCommodity">
      <a v-for="item in allData[2].products" :key="item.goodsId" :href="`/#/goods/${item.goodsId}`">
        <div class="zhengfangxing">
          <div class="zhengfangxing-child">
            <img loading="lazy" :src="item.imgSrc" alt="">
          </div>
        </div>
        <div class="CommodityItem_info">
          <div class="ellipsis-two word-break f12">
            {{ item.title }}
          </div>
        </div>
      </a>
    </section>
  </section>

  <section class="DecoratePoster" v-if="allData.length">
    <div class="DecoratePoster-title">
      {{ allData[3].categoryName }}
    </div>
    <swiper class="posterSwiper2">
      <swiper-slide v-for="item in allData[3].products" :key="item.goodsId">
        <a :href="`/#/goods/${item.goodsId}`">
          <div class="zhengfangxing">
            <div class="zhengfangxing-child">
              <img loading="lazy" :src="item.imgSrc" alt="">
            </div>
          </div>
          <div class="info">
            <div class="ellipsis-two word-break">
              {{ item.title }}
            </div>
          </div>
        </a>
      </swiper-slide>
    </swiper>
  </section>

  <section class="DecoratePoster" v-if="allData.length">
    <div class="DecoratePoster-title">
      {{ allData[4].categoryName }}
    </div>
    <section class="padding-horizontal">
      <section class="PosterGrid_box">
        <a class="float-left w-2/3" :href="`/#/goods/${allData[4].products[0].goodsId}`">
          <div>
            <div class="zhengfangxing">
              <div class="zhengfangxing-child">
                <img loading="lazy" :src="allData[4].products[0].imgSrc" alt="">
              </div>
            </div>
          </div>
        </a>
        <a class="float-left w-1/3 h-1/2" :href="`/#/goods/${allData[4].products[1].goodsId}`">
          <div>
            <div class="zhengfangxing">
              <div class="zhengfangxing-child">
                <img loading="lazy" :src="allData[4].products[1].imgSrc" alt="">
              </div>
            </div>
          </div>
        </a>
        <a class="float-left w-1/3 h-1/2" :href="`/#/goods/${allData[4].products[2].goodsId}`">
          <div>
            <div class="zhengfangxing">
              <div class="zhengfangxing-child">
                <img loading="lazy" :src="allData[4].products[2].imgSrc" alt="">
              </div>
            </div>
          </div>
        </a>
      </section>
    </section>
  </section>

  <section class="DecoratePoster" v-if="allData.length">
    <section class="DecoratePoster-title">
      {{ allData[5].categoryName }}
    </section>
    <section class="padding-horizontal DecorateCommodity">
      <a :href="`/#/goods/${item.goodsId}`" v-for="item in allData[5].products" :key="item.goodsId">
        <div class="zhengfangxing">
          <div class="zhengfangxing-child">
            <img loading="lazy" :src="item.imgSrc">
          </div>
        </div>
        <div class="CommodityItem_info">
          <div class="ellipsis-two word-break f12" >
            {{ item.title }}
          </div>
        </div>
      </a>
    </section>
  </section>

  <div class="h-11 bg-white"></div>

  <div class="fixed bottom-0 w-full flex h-11 bg-white z-50 btn-control" style="border-top: 1px solid rgba(32, 47, 100, .08);box-shadow: 0 0 8px rgba(0, 0, 0, .04);">
    <div class="flex-1 flex justify-center p-2 text-sm font-bold items-center cursor-pointer" style="color: var(--el-color-primary)" @click="category = true">
      <i class="wego-iconfont-s icon-mulu mr-1"></i>
      Category
    </div>
    <div class="flex-1 flex justify-center p-2 text-sm font-bold items-center cursor-pointer" @click="contact = true">
      <i class="wego-iconfont-s icon-WhatsApp mr-1" style="color: var(--el-color-success)"></i>
      Contact
    </div>
  </div>

  <el-drawer v-model="contact" direction="btt" :show-close="false" size="270px" :with-header="false" :close-on-press-escape="false" :close-on-click-modal="false">
    <connect-com @close="contact = false" />
  </el-drawer>
  <el-drawer v-model="category" direction="btt" :show-close="false" size="auto" :with-header="false">
    <category-com />
  </el-drawer>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'
import { onBeforeMount, onMounted, ref } from 'vue'
import GoodsNav from '@/portal/views/goods/components/goodsNav.vue'
import CategoryCom from '@/portal/views/store/components/category.vue'
import ConnectCom from './components/connect.vue'
import { homeData } from '@/portal/api/index.js'

const modules = [Pagination, Autoplay]
const contact = ref(false)
const category = ref(false)
const allData = ref({})

const getData = () => {
  homeData().then((res) => {
    allData.value = res.data
  })
}
onMounted(() => {
  getData()
})
onBeforeMount(() => {
  document.title = 'SilkRoad Store'
})
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1024px) {
  .top-search, .btn-control {
    max-width: 670px;
  }
}
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 4px;
}
.banner {
  background-color: #f2f4f5;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 258px;
  position: relative;
  background-image: url("@/portal/assets/storeBanner.jpg");
  background-position: left bottom;
  .bannerInfo {
    background-image: linear-gradient(180deg, rgba(77, 77, 77, 0), rgba(0, 0, 0, .3));
    height: 88px;
    padding: 0 8px;
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    .iconBox {
      padding: 0 8px;
      img {
        border-radius: 50%;
        display: block;
        height: 48px;
        object-fit: cover;
        width: 48px;
      }
    }
    .main {
      color: #fff;
      .title {
        font-size: 18px;
        font-weight: 500;
        -webkit-box-orient: vertical;
        word-wrap: break-word;
        display: -webkit-box;
        overflow: hidden;
        word-break: break-all;
        white-space: normal;
        -webkit-line-clamp: 2;
        display: flex;
        align-items: center;
        img {
          height: 16px;
          width: auto;
          margin-left: 4px;
        }
      }
      .data {
        margin-top: 4px;
        font-size: 12px;
        span {
          padding: 0 8px 0 0;
          margin-right: 8px;
          position: relative;
          &:after {
            position: absolute;
            content: '';
            width: 1px;
            height: 12px;
            right: 0;
            top: 2px;
            background: #ffffff;
          }
        }
        span:last-of-type {
          &:after {
            display: none;
          }
        }
      }
    }
  }
}
.notice {
  padding: 8px 16px;
  background: #ffffff;
  &-notice {
    border-radius: 4px;
    font-size: 14px;
    background-color: #fff4e7;
    color: #ff9310;
    padding: 6px 12px;
    position: relative;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    display: -webkit-box;
    overflow: hidden;
    word-break: break-all;
    white-space: pre-wrap;
    -webkit-line-clamp: 5;
  }
}
.decorateSwiper {
  background: #ffffff;
  padding: 16px 0;
  .swiper-container {
    .swiper-slide {
      padding: 0 16px;
    }
    img {
      border-radius: 4px;
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  }
}
:deep(.swiper-pagination-bullet-active) {
  background: #fff;
}
.decorateNav {
  padding: 16px 8px;
  background: #ffffff;
  &-list {
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
  }
  &-item {
    width: 20%;
  }
  &-imageBox {
    display: flex;
    justify-content: center;
    position: relative;
    img {
      border-radius: 50%;
      height: 56px;
      object-fit: cover;
      width: 56px;
    }
  }
  &_label {
    color: #626266;
    font-size: 12px;
    margin-top: 4px;
    text-align: center;
  }
}
.DecoratePoster {
  padding: 16px 0;
  background: #ffffff;
  &-title {
    color: #0a0a0a;
    font-size: 18px;
    font-weight: 500;
    line-height: 44px;
    margin-bottom: 4px;
    padding: 0 16px;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    display: -webkit-box;
    overflow: hidden;
    word-break: break-all;
    -webkit-line-clamp: 1;
  }
  .posterSwiper, .posterSwiper2 {
    padding: 0 16px 2px;
    .swiper-slide {
      margin-left: 16px;
      width: 40% !important;
      &:nth-of-type(1) {
        margin-left: 0;
      }
      a img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 4px;
      }
    }
  }
  .posterSwiper2 {
    .swiper-slide {
      width: 25% !important;
      a {
        box-shadow: 0 0 4px #eee;
        display: block;
      }
      .info {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        height: 72px;
        justify-content: space-between;
        padding: 6px;
        div {
          font-size: 12px;
          color: #1e2028;
        }
      }
    }
  }
  .PosterGrid_box {
    margin: -8px;
    overflow: hidden;
    a {
      border: 8px solid transparent;
      box-sizing: border-box;
    }
  }
  .DecorateCommodity {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    a {
      display: block;
      width: calc(33.33333% - 11px);
      box-shadow: 0 0 4px #eee;
    }
    a:nth-child(3n+1) {
      margin-left: 0;
    }
    .CommodityItem_info {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        height: 72px;
        justify-content: space-between;
        padding: 6px;
    }
  }
}
</style>
