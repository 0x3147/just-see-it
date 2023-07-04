<script setup lang="ts">
import HomeUpper from './homeUpper.vue'
</script>

<template>
  <div class="home">
    <div class="home-container">
      <HomeUpper />
      <div>用户相关点赞区域</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  padding-top: 60px;
}

.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
</style>
