<template>
  <goods-nav />
  <section v-loading="loading">
    <section class="w-full">
      <section>
        <swiper :modules="modules" :pagination="{ type: 'fraction' }">
          <swiper-slide
            v-for="(item, index) in detailData.imgsSrc"
            :key="item"
            @click="handlePreview(index)"
          >
            <div class="zhengfangxing">
              <div class="zhengfangxing-child">
                <img
                  class="Image"
                  loading="lazy"
                  :src="item"
                  style="width: 100%; height: 100%; object-fit: cover"
                />
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </section>
    </section>
    <section @click="handleCopy" class="index_commodity_title">
      <div class="title ellipsis-two word-break" :data-clipboard-text="lvjointext">
        {{ lvjointext }}
        
      </div>
    </section>
    <section class="searchCode px-4 py-2 bg-white mt-2">
      <div class="pt-1.5 text-sm leading-5" style="color: #939399">
        search code <span style="color: #0a0a0a">{{ detailData.markCode }}</span>
      </div>
    </section>
    <shop />
    <recommend />
    <details-com :details="detailData" />
  </section>
  <section class="bottom-btn py-1.5 px-4 fixed bottom-0 w-full bg-white z-50">
    <section
      class="h-9 rounded-3xl text-center text-sm flex items-center justify-center cursor-pointer"
      style="background: var(--el-color-success); color: #fff"
      @click="handleConsulting"
    >
      <i class="wego-iconfont-s icon-kefu-shangjia"></i>
      <span class="ml-1">Consulting price</span>
    </section>
  </section>

  <el-drawer
    v-model="contact"
    direction="btt"
    :show-close="false"
    size="270px"
    :with-header="false"
    :close-on-press-escape="false"
    :close-on-click-modal="false"
  >
    <connect-com :id="id" @close="contact = false" />
  </el-drawer>
</template>

<script setup>
import GoodsNav from '@/portal/views/goods/components/goodsNav.vue'
import Shop from './components/shop.vue'
import Recommend from '@/portal/views/goods/components/recommend.vue'
import DetailsCom from './components/details.vue'
import ConnectCom from '@/portal/views/store/components/connect.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import { getCurrentInstance, onMounted, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { productDetail } from '@/portal/api/index.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const modules = [Pagination]
const loading = ref(false)
const app = getCurrentInstance()
const contact = ref(false)
const id = ref('')
const lvjointext = ref('Louis Vuitton 💗More Styles 💖More Offers 📱Contact customer service 🥰 Copy the link 👇🏻👇🏻👇🏻 https://api.whatsapp.com/send?phone=85298417675')

const handleCopy = (ev) => {
  navigator.clipboard.writeText(ev.target.dataset.clipboardText).then(() => {
    ElMessage.info('Copied!')
  })
}
const handlePreview = (index) => {
  app.appContext.config.globalProperties.$hevueImgPreview({
    multiple: true,
    nowImgIndex: index,
    imgList: detailData.value.imgsSrc,
  })
}
const detailData = ref({})
const getDetails = async () => {
  id.value = router.currentRoute.value.params.id1
  if (!id.value) {
    return
  }
  productDetail(id.value)
    .then((res) => {
      detailData.value = res.data
      console.log(detailData,'detailData');
      
    })
    .finally(() => {
      loading.value = false
    })
  fbq('track', 'AddToWishlist', { content_ids: id.value })
}
const handleConsulting = () => {
  if (id.value) {
    fbq('track', 'AddToCart', { content_ids: id.value })
  }
  contact.value = true
}
onMounted(() => {
  loading.value = true
  getDetails()
})
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1024px) {
  .bottom-btn {
    width: 670px;
  }
}
.image-box {
  height: 0;
  overflow: hidden;
  padding-bottom: 100%;
  width: 100%;
}

.index_commodity_title {
  background: #ffffff;
  padding: 4px 16px 16px;

  .title {
    color: #2e2e2f;
    font-size: 17px;
    font-weight: 500;
    line-height: 24px;
    margin-right: 16px;
  }
}

:deep(.swiper-pagination) {
  display: flex;
  justify-content: end;
  padding: 0 8px;
  background: rgba(0, 0, 0, 0.3);
  width: fit-content;
  border-radius: 24px;
  font-size: 12px;
  color: #fff;
  left: 100%;
  transform: translateX(calc(-100% - 16px));
  bottom: 16px;
}
</style>
