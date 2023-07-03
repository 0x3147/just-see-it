<script setup lang="ts">
import { reactive } from 'vue'

const floors = reactive([
  { name: '特别推荐', top: 0 },
  { name: '搞笑', top: 500 },
  { name: '科幻', top: 1000 },
  { name: '游戏', top: 0 },
  { name: '体育', top: 0 },
  { name: '音乐', top: 0 }
])

const handleScroll = (top: number) => {
  window.scrollTo({
    top: top,
    behavior: 'smooth'
  })
}
</script>

<template>
  <div class="right-nav">
    <div
      class="nav-item"
      v-for="(item, index) in floors"
      :key="index"
      @click="handleScroll(item.top)"
    >
      {{ item.name }}
    </div>
    <n-back-top :right="30" :bottom="430" />
  </div>
</template>

<style scoped lang="scss">
.right-nav {
  background: #fff;
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  position: fixed;
  right: 20px;
  top: 200px;
  color: #505050;
  z-index: 9999;

  .nav-item {
    display: flex;
    padding: 12px;
    width: 50px;
    cursor: pointer;
    text-align: center;
    border-bottom: 1px solid #f2f2f2;
    flex-direction: column;
  }
}
</style>
