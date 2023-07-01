<script setup lang="ts">
import { VideocamOutline, SearchOutline } from '@vicons/ionicons5'
import HeaderNav from '@/components/AppHeader/cpns/header-nav.vue'
import HeaderUserInfo from '@/components/AppHeader/cpns/header-user-info.vue'
import router from '@/router'

const transToHome = () => {
  router.push({ path: '/' })
}
</script>

<template>
  <div class="app-header">
    <n-space justify="space-between" align="center">
      <div class="logo" @click='transToHome'>
        <n-icon size="40" :component="VideocamOutline" />
        <span>JST VISION</span>
      </div>
      <HeaderNav />
      <n-input class="search-bar" round placeholder="输入内容搜索~">
        <template #suffix>
          <n-icon :component="SearchOutline" />
        </template>
      </n-input>
      <HeaderUserInfo />
    </n-space>
  </div>
</template>

<style lang="scss">
.app-header {
  height: 75px;
  padding: 0 20px;
  background-color: #fff;
  background-image: linear-gradient(-225deg, #69eacb 0%, #eaccf8 48%, #6654f1 100%);
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);

  .logo {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 20px;
    font-weight: bold;
    color: #333;
    cursor: pointer;
  }

  .search-bar {
    width: 280px;
  }
}
</style>
