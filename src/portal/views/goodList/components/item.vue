<template>
  <ul class="virtuoso-item-list">
    <li class="templateList_shopItem" v-for="item in list" :key="item.goodsId" @click="goDetail(item.goodsId)">
      <div class="zhengfangxing">
        <div class="zhengfangxing-child">
          <img :src="item.imgSrc" loading="lazy" alt="">
        </div>
      </div>
      <div class="description">
        <div class="txt f12 word-break ellipsis-two">
          {{ item.title }}
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  list: {
    type: Array,
    default: () => []
  }
})
const goDetail = id => {
  router.push(`/goods/${id}`)
}
</script>

<style lang="scss" scoped>
.virtuoso-item-list {
  display: flex;
  flex-wrap: wrap;
  .templateList_shopItem {
    flex: 1;
    width: 33.3%;
    max-width: 33.3%;;
    min-width: 33.3%;
    box-sizing: border-box;
    padding: 7px;
    cursor: pointer;
    .zhengfangxing-child {
      img {
        border-radius: 6px;
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
    .description {
      width: 100%;
      height: 72px;
      background-color: white;
      position: relative;
      box-sizing: border-box;
      border-radius: 0px 0px 6px 6px;
      overflow: hidden;
      .txt {
        margin: 6px;
      }
    }
  }
}
</style>

