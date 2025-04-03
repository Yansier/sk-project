<template>
  <section class="goodsNav flex px-4 py-2">
    <el-icon size="24" @click="go">
      <ArrowLeft />
    </el-icon>
    <el-input v-model="inputValue" placeholder="Search" clearable @keyup.enter="handleSearch">
      <template #prefix>
        <el-icon><Search /></el-icon>
      </template>
    </el-input>
  </section>
  <section class="min-w-14">
    <good-list :list="list" />
  </section>
  <section
    class="flex justify-center items-center text-xs py-10"
    style="color: #6e7382"
    v-if="loading"
  >
    <el-icon class="mr-1 el-icon-loading"><Loading /></el-icon> loading
  </section>
  <el-empty v-if="!list.length && !loading && noMore">
    <template #description>
      <p class="font-500 text-center">Sorry, there are currently no relevant results</p>
      <p class="text-center mt-2">Try changing the keyword ~</p>
    </template>
  </el-empty>
</template>
<script setup>
import { ArrowLeft, Loading, Search } from '@element-plus/icons-vue'
import GoodList from '@/portal/views/goodList/components/item.vue'
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { productList } from '@/portal/api/index.js'
import { useGlobalStore } from '@/portal/stores/global.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const inputValue = ref('')
const loading = ref(false)
const noMore = ref(false)
const list = ref([])
const pageNum = ref(0)
const globalStore = useGlobalStore()

const handleSearch = (value) => {
  if (!value) {
    return
  }
  fbq('track', 'Search', { search_string: value })
  list.value = []
  pageNum.value = 0
  getData()
}
const getData = () => {
  loading.value = true

  pageNum.value = pageNum.value + 1
  productList({
    pageNum: pageNum.value,
    pageSize: 20,
    keyword: inputValue.value,
  })
    .then((response) => {
      list.value = [...list.value, ...response.rows]
      if (!response.rows || !response.rows.length) {
        noMore.value = true
      }
    })
    .finally(() => {
      loading.value = false
    })
}
const go = () => {
  router.go(-1)
}

const handleScroll = () => {
  const container = document.documentElement
  const scrollBottom = container.scrollHeight - container.scrollTop - container.clientHeight
  globalStore.updateScrollBottom(scrollBottom)

  if (scrollBottom < 100 && !loading.value) {
    getData()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.goodsNav {
  background: #ffffff;
  .el-icon {
    background: #ffffff;
    border-radius: 32px;
    width: 32px;
    height: 32px;
    cursor: pointer;
  }
  .el-input {
    :deep(.el-input__wrapper) {
      border-radius: 32px;
    }
  }
}
</style>
