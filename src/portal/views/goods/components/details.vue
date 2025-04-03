<template>
  <section class="index_commodity_mul_details mb-10">
    <section class="flex justify-between px-4">
      <div class="tips">Graphic details</div>
      <span class="btn">
        <el-icon v-if="expand" @click="expand = false"><ArrowRight /></el-icon>
        <el-icon v-else @click="expand = true"><ArrowDown /></el-icon>
      </span>
    </section>
    <section v-show="!expand" class="fade-section">
        <div class="title">
          <div class="title-font">
            {{ details.title }}
          </div>
        </div>
        <a v-for="item in details.imgsSrc" href="javascript:void(0)" class="mul-item" :key="item">
          <img :src="item" loading="lazy" alt="">
        </a>
        <div class="detail-tags">
          <el-button type="success" plain size="small">{{ details.categoryName }}</el-button>
        </div>
        <div class="detail-explain">
          <div class="explain-title">
            Product purchase instructions
          </div>
          <div class="explain-content">
            All packages are shipped by air ✈.<br>
            7-15 days to arrive<br>
            Please contact WhatsApp customer service for exact time.
          </div>
        </div>
      </section>
  </section>
</template>

<script setup>
import { ArrowDown, ArrowRight } from '@element-plus/icons-vue'
import { ref } from 'vue'

const props = defineProps({
  details: {
    type: Object,
    default: () => ({}),
  }
})
const expand = ref(false)
</script>

<style lang="scss" scoped>
.index_commodity_mul_details {
  background: #ffffff;
  margin-top: 8px;
  .tips {
    color: #939399;
    font-size: 14px;
    line-height: 20px;
    padding: 16px 0;
    text-align: center;
    position: relative;
    &:before {
      background: #ececee;
      border-radius: 1px;
      content: "";
      display: inline-block;
      height: 1px;
      margin-right: 8px;
      vertical-align: middle;
      width: 16px;
    }
    &:after {
      background: #ececee;
      border-radius: 1px;
      content: "";
      display: inline-block;
      height: 1px;
      margin-left: 8px;
      vertical-align: middle;
      width: 16px;
    }
  }
  .btn {
    color: #939399;
    font-size: 16px;
    padding: 16px 0;
  }
  .title {
    padding: 8px 16px 24px;
    .title-font {
      margin-top: 10px;
      word-wrap: break-word;
      color: #2e2e2f;
      font-size: 14px;
      line-height: 20px;
      text-align: justify;
      white-space: pre-wrap;
      -ms-word-break: break-all;
      word-break: break-all;
    }
  }
  .mul-item {
    display: block;
    img {
      display: block;
      object-fit: cover;
      width: 100%;
    }
  }
  .detail-tags {
    padding: 12px 16px;
  }
  .detail-explain {
    padding: 16px;
    margin-bottom: 60px;
    .explain-title {
      color: #0a0a0a;
      font-size: 16px;
      font-weight: 500;
      line-height: 22px;
    }
    .explain-content {
      color: #939399;
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      margin-top: 12px;
      white-space: pre-line;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
