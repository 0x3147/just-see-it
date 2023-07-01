<script setup lang="ts">
import Carousel from '@/views/Index/cpns/carousel.vue'
import Recommend from '@/views/Index/cpns/recommend.vue'
</script>

<template>
  <div class="index">
    <div class="index-container">
      <Carousel />
      <Recommend />
      <div>热点与排行榜</div>
      <div>游戏和热门推荐</div>
    </div>
  </div>
</template>

<style lang="scss">
.index {
  padding-top: 60px;

  .index-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
}
</style>
