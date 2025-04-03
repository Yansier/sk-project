<template>
  <div class="app-table">
    <el-table
        style="width: 100%"
        :data="showData"
        :stripe="stripe"
        :border="border"
        :empty-text="emptyText"
        :max-height="maxHeight"
        @selection-change="handleSelectionChange"
    >
      <slot></slot>
<!--      <template #append>-->
<!--        <div class="w-full" v-if="loading">数据加载</div>-->
<!--      </template>-->
    </el-table>

    <div
        ref="pagination"
        v-if="pagination && showPagination"
    >
      <el-pagination
          v-if="isLoadDataComplete && total > 0"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pgSize"
          :page-sizes="pageSizes"
          :total="total"
          :layout="layout"
          class="flex justify-end pt-4"
          size="small"
      ></el-pagination>
    </div>

    <div v-if="loading" class="table-mask">
      <div class="el-loading-spinner">
        <svg viewBox="25 25 50 50" class="circular">
          <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-table',
}
</script>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import request from '@/utils/request'

const props = defineProps({
  url: String,
  maxHeight: String,
  lazy: {
    type: Boolean,
    default: false
  },
  queryParams: {
    type: Function,
    default() {
      return () => {}
    }
  },
  methods: {
    type: String,
    default: 'Get'
  },
  pagination: {
    type: Boolean,
    default: true
  },
  data: {
    type: Array,
    default: () => []
  },
  stripe: {
    type: Boolean,
    default: false
  },
  border: {
    type: Boolean,
    default: false
  },
  emptyText: String,
  pageSize: {
    type: Number,
    default: 10
  },
  layout: {
    type: String,
    default: 'total, sizes, prev, pager, next, jumper'
  },
  ifUseLoading: {
    type: Boolean,
    default: true
  },
  showPagination: {
    type: Boolean,
    default: true
  }
})

const loading = ref(false)
const total = ref(0)
const currentPage = ref(1)
const pgSize = ref(props.pageSize)
const showData = ref([])
const currentData = ref([])
const isLoadDataComplete = ref(false)
const isServer = computed(() => !(props.url === undefined))
const pageSizes = computed(() => props.pageSize === 10
  ? [10, 20, 30, 40, 50, 100]
  : [props.pageSize, 10, 20, 30, 40, 50, 100].sort((a, b) => {
    return a - b
  })
)

const emits = defineEmits(['current-change-page', 'current-change-size', 'selection-change'])

const handleSizeChange = (size) => {
  pgSize.value = size
  handleCurrentChange(1)
  emits('current-change-size', size)
}
const handleCurrentChange = (page) => {
  if (!isServer.value) {
    // 模拟分页
    let tmpArr = []

    for (let i = 0; i < pgSize.value; i++) {
      let tmpData = currentData.value[(page - 1) * pgSize.value + i]

      if (tmpData) {
        tmpArr.push(tmpData)
      }
    }

    total.value = currentData.value.length
    showData.value = tmpArr
  } else {
    currentPage.value = page
    _getData(true)
  }
  emits('current-change-page', page)
}
const handleSelectionChange = (val) => {
  emits('selection-change', val)
}

const reload = (toFirstPage = false) => {
  if (isServer.value) {
    if (toFirstPage) {
      currentPage.value = 1
      emits('current-change-page', 1)
      _getData()
    } else {
      _getData()
    }
  }
}

/**
 * 请求数据
 * @private
 */
const _getData = (isPage) => {
  let params = Object.assign(props.showPagination ? {
    pageNum: currentPage.value,
    pageSize: pgSize.value,
  } : {}, props.queryParams())
  loading.value = props.ifUseLoading

  request({
    method: props.methods,
    url: props.url,
    params
  }).then(res => {
    if (Array.isArray(res.rows) && res.rows.length) {
      showData.value = res.rows
      total.value = res.total || total.value
      if (total.value && !showData.value.length) {
        // 最后一页数据被删除时 返回第一页
        reload(true)
      }
    } else {
      showData.value = []
      total.value = 0
    }

    if (isPage) {
      // emits('current-change-page', res.elements)
    }
    isLoadDataComplete.value = true
  }).finally(() => {
    loading.value = false
  })
}

watch(() => props.data, (newVal) => {
  showData.value = newVal
})

onMounted(() => {
  if (!props.pagination) {
    showData.value = currentData.value = props.data
  } else if (!isServer.value) {
    // 模拟分页
    currentData.value = props.data
    isLoadDataComplete.value = true

    handleCurrentChange(1)
  } else {
    !props.lazy && _getData()
  }
})

defineExpose({
  reload
})
</script>

<style lang="scss">
.app-table {
  position: relative;
  & .el-table__inner-wrapper:before {
    display: none;
  }
  .el-table tbody .el-table__cell {
    color: var(--itsop-font-0);
    //border: none;
  }
  .el-table thead th.el-table__cell {
    font-weight: normal;
    color: #7D8DA6;
    background: #F5F7F9 !important;
  }
  .el-table {
    .el-table__header-wrapper {
      border-radius: 10px;
    }
  }
}
.table-mask {
  position: absolute;
  top: 1px;
  left: 1px;
  bottom: 1px;
  right: 1px;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.9);
}
</style>
