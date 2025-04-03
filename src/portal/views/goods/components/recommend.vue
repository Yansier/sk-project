<template>
  <section class="recommend">
    <div class="tips">
      Shop recommendation
    </div>
    <section class="DecoratePoster px-4">
      <swiper class="posterSwiper2">
        <swiper-slide @click="goStore">
          <a href="javascript:void(0)">
            <div class="zhengfangxing">
              <div class="zhengfangxing-child">
                <img class="Image_Image__NdcLd PosterImg_PosterImg__iNaGV PosterItem_img__o5K7i" loading="lazy" src="https://xcimg.szwego.com/wsxcWeb/1b289992/o_1i8pea5o91g6qq0f1vm11s8l1u9v5e.jpeg" alt="">
              </div>
            </div>
            <div class="info text-sm leading-5">
              <div class="ellipsis-two word-break">
                Burberry
                💗More Styles
                💖More Offers
                📱Contact customer service 🥰
                Copy the link 👇🏻👇🏻👇🏻
                http://www.whatsappforce.com/ccQpUw8n
              </div>
            </div>
          </a>
        </swiper-slide>
        <swiper-slide @click="goStore">
          <a href="javascript:void(0)">
            <div class="zhengfangxing">
              <div class="zhengfangxing-child">
                <img class="Image_Image__NdcLd PosterImg_PosterImg__iNaGV PosterItem_img__o5K7i" loading="lazy" src="https://xcimg.szwego.com/wsxcWeb/1b289992/o_1i8pea8rn1pagk0513uoms51qp35k.jpeg" alt="">
              </div>
            </div>
            <div class="info text-sm leading-5">
              <div class="ellipsis-two word-break">
                Burberry
                💗More Styles
                💖More Offers
                📱Contact customer service 🥰
                Copy the link 👇🏻👇🏻👇🏻
                http://www.whatsappforce.com/ccQpUw8n
              </div>
            </div>
          </a>
        </swiper-slide>
      </swiper>
    </section>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const goStore = () => {
  router.push('/store')
}
</script>

<style lang="scss" scoped>
.recommend {
  background-color: #fff;
  padding: 0 0 16px;
  position: relative;
  &:before {
    border-bottom: 1px solid #ececee;
    content: " ";
    display: inline-block;
    height: 1px;
    left: 16px;
    position: absolute;
    right: 16px;
    top: 0;
    transform: scaleY(.5);
  }
  .tips {
    color: #0a0a0a;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    margin-left: 16px;
    padding: 12px 0;
  }
}
.DecoratePoster {
  .posterSwiper2 {
    .swiper-slide {
      width: 25% !important;
      margin-left: 16px;
      &:nth-of-type(1) {
        margin-left: 0;
      }
      img {
        border: .5px solid #ececee;
        border-radius: 4px;
        box-sizing: border-box;
        height: 100%;
        object-fit: cover;
        overflow: hidden;
        width: 100%;
      }
    }
  }
}
</style>
