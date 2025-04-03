<template>
  <section class="shopInfo">
    <section class="shopTitle">
      <div class="avatar">
        <img src="/favicon.png" alt="">
      </div>
      <div class="name">
        <span>
          SilkRoad Store
        </span>
        <img src="@/portal/assets/svip.png" alt="vip icon" width="29" height="16">
      </div>
      <el-button type="success" plain  @click="goStore">Go Shopping</el-button>
    </section>
    <section class="data">
      <div class="data-item">
        New
        <span>10</span>
      </div>
      <div class="data-item">
        Total
        <span>100</span>
      </div>
    </section>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goStore = () => {
  router.push('/store')
}
</script>

<style lang="scss" scoped>
.shopInfo {
  margin-top: 8px;
  background: #ffffff;
  .shopTitle {
    padding: 16px;
    display: flex;
    align-content: center;
    .avatar {
      border: .5px solid #ececee;
      border-radius: 50%;
      box-sizing: border-box;
      height: 40px;
      overflow: hidden;
      width: 40px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        user-select: none;
      }
    }
    .name {
      flex: 1;
      color: #0a0a0a;
      font-size: 16px;
      font-weight: 500;
      line-height: 22px;
      -webkit-user-select: text;
      -moz-user-select: text;
      user-select: text;
      margin-left: 8px;
      display: flex;
      align-items: center;
      img {
        margin-left: 4px;
      }
    }
  }
  .data {
    padding: 8px 16px 18px;
    display: flex;
    position: relative;
    &:after {
      border-right: 1px solid #ececee;
      content: "";
      display: inline-block;
      height: 100%;
      position: absolute;
      right: 0;
      transform: scaleX(.5);
    }
    .data-item {
      color: #939399;
      font-size: 14px;
      line-height: 20px;
      display: flex;
      justify-content: center;
      align-content: center;
      flex: 1;
      span {
        color: #0a0a0a;
        margin-left: 4px;
      }
    }
  }
}
</style>
