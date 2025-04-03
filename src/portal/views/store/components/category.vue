<template>
  <section style="height: 775px" class="flex" v-loading="loading">
    <section class="h-full w-fit left" style="background: rgb(245, 245, 245)">
      <div class="w-full item" v-for="item in segmentedOptions" :key="item.value" :class="{ active: activeSection === item.value }" @click="handleChange(item.value)">
        {{ item.label }}
      </div>
    </section>
    <section class="flex-1 h-full overflow-y-auto" ref="contentRef">
      <div v-for="item in options" class="px-0.5" :key="item.id">
        <div :id="item.name" class="flex justify-between items-center f14 font-bold" style="padding: 0px 10px; font-weight: bold; height: 52px; line-height: 52px; color: rgb(46, 46, 47);">
          <div class="f-flex-1 ellipsis-one">{{ item.name }}</div>
<!--          <el-icon class="cursor-pointer" @click="goGoodList(item.id)"><arrow-right /></el-icon>-->
        </div>
        <div class="flex flex-wrap">
          <div v-for="childItem in item.child" :key="childItem.id" class="w-1/3 border-box px-3 cursor-pointer" @click="goGoodList(childItem.id)">
            <div class="relative zhengfangxing">
              <div class="zhengfangxing-child">
                <img class="w-full h-full" loading="lazy" :src="childItem.logo" alt="" style="object-fit: cover;">
              </div>
            </div>
            <div class="word-break ellipsis-two f14 text-center mt-2 mb-4 w-full leading-5 max-h-10" style="color: rgb(37, 37, 37);">
              {{ childItem.name }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { categoryTree } from '@/portal/api/index.js'
import { ArrowRight } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeSection = ref('')
const contentRef = ref(null)
let observer = null
const segmentedOptions = ref([])
const options = ref([])
const loading = ref(false)

const handleChange = (value) => {
  const target = document.getElementById(value)
  if (target) {
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
const bindObserve = () => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    {
      root: contentRef.value,
      rootMargin: '0px 0px -50% 0px',
      threshold: 0.2,
    }
  )
  options.value.forEach(option => {
    const optionsEl = document.getElementById(option.name)
    if (optionsEl) observer.observe(optionsEl)
  })
}
const getData = () => {
  loading.value = true
  categoryTree().then(res => {
    options.value = res.data
    segmentedOptions.value = res.data.map(item => ({ value: item.name, label: item.name }))
    activeSection.value = segmentedOptions.value[0].label
    nextTick(() => {
      bindObserve()
    })
  }).finally(() => {
    loading.value = false
  })
}
const goGoodList = (id) => {
  router.push('/goodList/' + id)
}
onMounted(() => {
  getData()
})
onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<style lang="scss" scoped>
.left {
  width: 30%;
  .item {
    padding: 16px 16px;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 14px;
    white-space: nowrap;
    &.active {
      background: #ffffff;
      color: var(--el-color-success);
    }
  }
}
</style>
