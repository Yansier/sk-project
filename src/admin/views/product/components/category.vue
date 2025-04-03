<template>
  <app-table
    :data="tableData"
    :pagination="false"
  >
    <el-table-column type="expand">
      <template #default="{ row }">
        <el-descriptions :column="3" border>
          <template  v-for="item in row.child">
            <el-descriptions-item label="名称">
              {{ item.name }}
            </el-descriptions-item>
            <el-descriptions-item label="Logo">
              <img :src="item.logo" alt="" @click="handlePreview(item.logo)" loading="lazy" width="30">
            </el-descriptions-item>
            <el-descriptions-item label="操作">
              <el-button link type="primary" @click="handleEdit(item)">编辑</el-button>
            </el-descriptions-item>
          </template>
        </el-descriptions>
      </template>
    </el-table-column>
    <el-table-column label="名称" prop="name"></el-table-column>
  </app-table>

  <el-dialog v-model="dialogVisible" :close-on-press-escape="false" :close-on-click-modal="false" title="更新Logo">
    <el-form>
      <el-form-item label="Logo">
        <el-upload
          action="#"
          multiple
          :on-change="uploadChange"
          :on-remove="onRemove"
          :file-list="fileList"
          :on-preview="handlePictureCardPreview"
          list-type="picture-card"
          :auto-upload="false"
          :limit="1"
        >
          <el-icon><Plus /></el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <div class="w-full text-right">
          <el-button @click="handleCancel">取消</el-button>
          <el-button type="primary" @click="handleSubmit">确定</el-button>
        </div>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script setup>
import AppTable from '@/admin/components/table/index.vue'
import { getCurrentInstance, onMounted, ref } from 'vue'
import { updateCategory, categoryTree } from '@/admin/api/index.js'
import { ElMessage } from 'element-plus'

const app = getCurrentInstance()
const dialogVisible = ref(false)
const editData = ref({
  categoryId: '',
  logo: ''
})
const fileList = ref([])
const tableData = ref([])

const handlePreview = (url) => {
  if (url) {
    app.appContext.config.globalProperties.$hevueImgPreview(url)
  }
}
const uploadChange = (file) => {
  editData.value.logo = file.raw
}
const onRemove = () => {
  editData.value.logo = ''
}
const handleEdit = (row) => {
  editData.value = {
    categoryId: row.id,
    logo: row.logo
  }
  fileList.value = [{
    name: row.logo,
    url: row.logo
  }]
  dialogVisible.value = true
}
const handlePictureCardPreview = (url) => {
  handlePreview(url.url)
}
const handleCancel = () => {
  editData.value = {
    categoryId: '',
    logo: ''
  }
  dialogVisible.value = false
}
const handleSubmit = () => {
  if (!editData.value.logo) {
    ElMessage.warning('请上传Logo图片')
    return false
  }
  updateCategory(editData.value).then(() => {
    ElMessage.success('修改成功')
    handleCancel()
  })
}

onMounted(() => {
  categoryTree().then(res => {
    tableData.value = res.data
  })
})
</script>

<style lang="scss" scoped>
:deep(.el-descriptions__label.el-descriptions__cell.is-bordered-label) {
  width: 100px;
}
</style>
