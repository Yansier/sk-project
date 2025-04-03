<template>
  <section class="bg-white p-4 m-4">
    <el-tabs class="mb-2" type="card" v-model="activeTab">
      <el-tab-pane label="商品列表" name="product">
        <el-form :model="searchForm">
          <el-row :gutter="32">
            <el-col :span="8">
              <el-form-item label="商品分类" prop="categoryId">
                <el-select v-model="searchForm.categoryId" filterable>
                  <el-option v-for="item in categoryOptions" :key="item.id" :label="item.name" :value="item.id" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="关键词" prop="keyword">
                <el-input v-model="searchForm.keyword" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-button @click="handleReset">重置</el-button>
              <el-button type="primary" @click="handleSearch">查询</el-button>
            </el-col>
          </el-row>
        </el-form>
        <el-button class="mb-4" @click="dialogVisible = true" type="primary">新增</el-button>
        <app-table
          ref="tableRef"
          url="/sys/product/item/list"
          :query-params="queryParams"
        >
          <!--      <el-table-column label="商品ID" prop="goodsId" />-->
          <el-table-column label="标题" prop="title" min-width="300" />
          <el-table-column label="封面" prop="imgSrc">
            <template #default="{row}">
              <img class="cursor-pointer" :src="row.imgSrc" alt="" width="40" @click="handlePreview(row.imgSrc)">
            </template>
          </el-table-column>
          <el-table-column label="商品分类" prop="categoryName" />
          <el-table-column label="进货价" prop="purchase" />
          <el-table-column label="标价" prop="listPrice" />
          <el-table-column label="售价" prop="sellingPrice" />
          <el-table-column label="操作" width="120">
            <template #default="{ row }">
              <el-button link type="primary" @click="handleEdit(row)">编辑</el-button>
              <el-button link type="primary" @click="handleDelete(row)">删除</el-button>
            </template>
          </el-table-column>
        </app-table>
      </el-tab-pane>
      <el-tab-pane label="商品分类" name="category">
        <category-com />
      </el-tab-pane>
    </el-tabs>
  </section>
  <el-dialog v-model="dialogVisible" :close-on-click-modal="false" :close-on-press-escape="false" title="编辑">
    <el-form ref="formRef" :model="editData" label-width="auto">
      <el-form-item label="标题" prop="title">
        <el-input v-model="editData.title" type="text" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="详情图" prop="imgsSrc">
        <div class="flex flex-wrap">
          <img class="rounded-s w-1/3 border-box p-1 cursor-pointer" v-for="item in editData.imgsSrc" :src="item" :key="item" alt="" @click="handlePreview(item)">
        </div>
      </el-form-item>
      <el-form-item label="搜索码" prop="markCode">
        <el-input v-model="editData.markCode" type="text" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="商品分类" prop="categoryId">
        <el-select v-model="editData.categoryId" filterable>
          <el-option v-for="item in categoryOptions" :key="item.id" :label="item.name" :value="item.id" />
        </el-select>
      </el-form-item>
      <el-form-item label="进货价" prop="purchase">
        <el-input-number v-model="editData.purchase" :precision="2"></el-input-number>
      </el-form-item>
      <el-form-item label="标价" prop="listPrice">
        <el-input-number v-model="editData.listPrice" :precision="2"></el-input-number>
      </el-form-item>
      <el-form-item label="售价" prop="sellingPrice">
        <el-input-number v-model="editData.sellingPrice" :precision="2"></el-input-number>
      </el-form-item>
      <el-form-item>
        <div class="w-full text-right">
          <el-button @click="handleCancel">取消</el-button>
          <el-button @click="handleSubmit" type="primary">确定</el-button>
        </div>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script setup>
import AppTable from '@/admin/components/table/index.vue'
import CategoryCom from '@/admin/views/product/components/category.vue'
import { getCurrentInstance, onMounted, ref } from 'vue'
import { operateProduct, categoryList, deleteProduct, productDetail } from '@/admin/api/index.js'
import { ElMessage, ElMessageBox } from 'element-plus'

const activeTab = ref('product')
const searchForm = ref({
  keyword: '',
  categoryId: ''
})
const dialogVisible = ref(false)
const tableRef = ref(null)
const editData = ref({
  title: '',
  imgsSrc: [],
  markCode: '',
  categoryId: '',
  purchase: 0,
  listPrice: 0,
  sellingPrice: 0
})
const formRef = ref(null)
const categoryOptions = ref([])
const fileList = ref([])
const app = getCurrentInstance()

const queryParams = () => {
  const { keyword, categoryId } = searchForm.value
  return {
    keyword,
    categoryId
  }
}

const onRemove = (file) => {
  console.log(fileList.value,file)
  fileList.value = fileList.value.filter(item => item.uid !== file.uid)
}
const uploadChange = (file, list) => {
  fileList.value = list
}
const handleSearch = () => {
  tableRef.value.reload(true)
}
const handleReset = () => {
  searchForm.value = {
    keyword: '',
    categoryId: ''
  }
  handleSearch()
}
const handleEdit = (row) => {
  productDetail(row.goodsId).then(res => {
    editData.value = res.data
    fileList.value = res.data.imgsSrc.map(item => {
      return {
        name: item,
        url: item
      }
    })
  })
  dialogVisible.value = true
}
const handleDelete = (row) => {
  ElMessageBox.confirm('确定删除吗？', '提示', {
    type: 'warning'
  }).then(() => {
    deleteProduct(row.goodsId).then(() => {
      ElMessage.success('删除成功')
      tableRef.value.reload(false)
    })
  }).catch(() => {})
}

const handleCancel = () => {
  editData.value.goodsId = ''
  fileList.value = []
  formRef.value.resetFields()
  dialogVisible.value = false
}
const handleSubmit = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      editData.value.imgsSrc = fileList.value.map(v => v.url || v.raw)
      operateProduct(editData.value).then(() => {
        ElMessage.success('编辑成功')
        handleCancel()
        handleSearch()
      })
    }
  })
}
const handlePreview = (src) => {
  app.appContext.config.globalProperties.$hevueImgPreview(src)
}
onMounted(() => {
  categoryList().then(res => {
    categoryOptions.value = res.data
  })
})
</script>
