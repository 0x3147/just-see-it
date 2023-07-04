<script setup lang="ts">
import { ref } from 'vue'
import Carousel from './cpns/carousel.vue'
import Recommend from './cpns/recommend.vue'
import HotVideo from './cpns/hotVideo.vue'
import GameRecommend from './cpns/gameRecommend.vue'
import SideNav from './cpns/sideNav.vue'

const containerRef = ref<HTMLElement | undefined>(undefined)
</script>

<template>
  <div class="index">
    <div class="index-container" ref="containerRef">
      <Carousel />
      <Recommend />
      <HotVideo />
      <GameRecommend />
      <SideNav />
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
