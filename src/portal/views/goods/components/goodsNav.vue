<template>
  <section class="goodsNav" :style="{ background: bg }">
    <el-icon size="24" v-if="showIcons" @click="goBack">
      <ArrowLeft />
    </el-icon>
    <el-input placeholder="Search" @focus="router.push('/search')">
      <template #prefix>
        <el-icon><Search /></el-icon>
      </template>
    </el-input>
  </section>
</template>
<script setup lang="ts">
import { ArrowLeft, Search } from '@element-plus/icons-vue'
import { onBeforeMount, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  showIcons: {
    type: Boolean,
    default: true
  }
})

const goBack = () => {
  router.go(-1)
}
const bg = ref('')
const handleScroll = () => {
  const scrollTop = document.documentElement.scrollTop
  if (scrollTop && scrollTop > 258) {
    bg.value = '#fff'
  } else {
    bg.value = 'transparent'
  }
}
onBeforeMount(() => {
  document.title = 'Product Detail'
})
onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.goodsNav {
  padding: 0 12px;
  display: flex;
  gap: 16px;
  height: 44px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 99;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
  left: 0;
  .el-icon {
    background: rgba(0,0,0,.3);
    color: #ffffff;
    border-radius: 32px;
    width: 32px;
    height: 32px;
  }
  .el-input {
    :deep(.el-input__wrapper) {
      background: rgba(0,0,0,.3);
      color: #ffffff;
      border-radius: 32px;
      .el-icon {
        background: transparent;
        transform: translateX(-10%);
      }
    }
    :deep(.el-input__inner) {
      color: #ffffff;
      &::placeholder {
        color: #ffffff;
      }
    }
  }
}
</style>
