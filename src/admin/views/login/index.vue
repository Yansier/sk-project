<template>
  <div class="login flex items-center justify-center w-full">
    <el-form ref="loginForm" class="w-1/3 p-8 bg-white rounded-lg" :model="form" :rules="formRules" label-position="left" label-width="80">
      <h2 class="font-bold mb-6 text-lg">商户后台</h2>
      <el-form-item label="账号" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <div class="w-full text-center">
          <el-button class="w-full loginBtn" type="primary" @click="handleSubmit">登录</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { nextTick, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { authLogin } from '@/admin/api'
// import { useGlobalStore } from '@/store/global'

const loginForm = ref()
const router = useRouter()
// const globalStore = useGlobalStore()

const form = reactive({
  username: '',
  password: '',
  grantType: 'password',
})
const formRules = reactive({
  username: [{ required: true, trigger: 'blur', message: '请输入账号' }],
  password: [{ required: true, trigger: 'blur', message: '请输入密码' }]
})

const handleSubmit = () => {
  loginForm.value.validate(valid => {
    if (valid) {
      authLogin({
        ...form
      }).then(res => {
        localStorage.setItem('token', res.data.access_token)
        // globalStore.setUserData(res)
        nextTick(() => {
          router.push('/product')
        })
      })
    }
  })
}

</script>

<style lang="scss">
.login {
  height: 100vh;
  text-align: center;
  .loginBtn {
    height: 48px;
    font-size: 16px;
  }
}
</style>
