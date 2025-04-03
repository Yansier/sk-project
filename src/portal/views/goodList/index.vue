<template>
  <section style="background: #fff; overflow: hidden">
    <el-icon size="24" @click="goBack" class="allpagegoback">
      <ArrowLeft />
    </el-icon>
    <section class="tabs">
      <section class="tabs-wrapper">

        <section class="tabs-items flex">
          <div>All</div>
          <div></div>
          <div></div>
          <div></div>
        </section>
        <section class="tabs-slider">
          <div class="tabs-line"></div>
        </section>
      </section>
    </section>
    <section class="search-bar">
      <el-input v-model="searchTxt" placeholder="Search" @focus="router.push('/search')">
        <template #prefix>
          <el-icon>
            <Search />
          </el-icon>
        </template>
      </el-input>
    </section>
    <section class="tag-list" v-show="products.length">
      <div class="tag">
        {{ products.length && products[0].categoryName }}
      </div>
    </section>
  </section>
  <section class="good-list overflow-y-auto" @scroll="handleScroll">
    <good-list :list="products" />
  </section>
  <section class="h-36 text-center loading">
    <div class="noMore" v-if="noMoreData">no more data</div>
    <template v-else>
      <el-icon class="mr-1 el-icon-loading">
        <Loading />
      </el-icon> loading
    </template>
  </section>
</template>

<script setup>
import GoodList from './components/item.vue'
import { Loading, Search } from '@element-plus/icons-vue'
import { ref, onBeforeMount, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { productList } from '@/portal/api/index.js'
import { useGlobalStore } from '@/portal/stores/global.js'

const searchTxt = ref('')
const router = useRouter()
let pageNum = ref(0)
const products = ref([])
const loading = ref(false)
const noMoreData = ref(false)
const globalStore = useGlobalStore()

const goBack = () => {
  
  router.go(-1)
}
const getData = async (id) => {
  try {
    loading.value = true
    pageNum.value = pageNum.value + 1
    const res = await productList({ pageNum: pageNum.value, pageSize: 20, categoryId: id })
    products.value = [...products.value, ...res.rows]
    if (!res.rows || res.rows.length === 0) {
      noMoreData.value = true
    }
    document.title = res.rows[0].categoryName
  } catch (e) {
    console.log(e)
  } finally {
    loading.value = false
  }
}
const handleScroll = () => {
  const container = document.documentElement
  const scrollBottom = container.scrollHeight - container.scrollTop - container.clientHeight
  globalStore.updateScrollBottom(scrollBottom)

  if (scrollBottom < 100 && !loading.value) {
    getData(router.currentRoute.value.params.id)
  }
}
onMounted(() => {
  getData(router.currentRoute.value.params.id)
  window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.tabs {
  padding: 0 4px;
  position: relative;

  .tabs-wrapper {
    position: relative;

    .tabs-items {
      display: flex;
    }

    .tabs-items div {
      flex: 1;
      width: 25%;
      min-width: 25%;
      text-align: center;
      height: 48px;
      line-height: 48px;
      font-weight: 500;
    }
  }

  .tabs-slider {
    width: 25%;
    transform: translate3d(0%, 0px, 0px);
    position: absolute;
    bottom: 0;
    left: 0;
    transition: all 0.3s;

    .tabs-line {
      background-color: #49c167;
      border-radius: 8px;
      height: 4px;
      margin: auto;
      width: 32px;
    }
  }
}

.tag-list {
  margin: 0 16px 5px;

  .tag {
    color: #6e7382;
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    background: #f8f9fa;
    border-radius: 1.25rem;
    width: fit-content;
  }
}

.search-bar {
  padding: 16px;

  .el-input :deep(.el-input__wrapper) {
    border-radius: 32px;
    background: #f8f9fa;
  }
}

.loading {
  color: #6e7382;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
}

.noMore {
  color: #939399;
  font-size: 14px;
  line-height: 20px;
  padding: 16px 0;
  text-align: center;
  position: relative;

  &:before {
    background: #ececee;
    border-radius: 1px;
    content: '';
    display: inline-block;
    height: 1px;
    margin-right: 8px;
    vertical-align: middle;
    width: 16px;
  }

  &:after {
    background: #ececee;
    border-radius: 1px;
    content: '';
    display: inline-block;
    height: 1px;
    margin-left: 8px;
    vertical-align: middle;
    width: 16px;
  }
}
.allpagegoback{
  position: absolute;
  left: 14px;
  top: 14px;
  border: 1px solid grey;
  border-radius: 14px;
  z-index: 99;
}
</style>
