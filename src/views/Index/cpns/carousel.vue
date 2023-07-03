<script setup lang="ts">
import { reactive } from 'vue'

const carouselList = reactive([
  {
    id: '1',
    img: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg'
  },
  {
    id: '2',
    img: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg'
  },
  {
    id: '3',
    img: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg'
  },
  {
    id: '4',
    img: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg'
  }
])
</script>

<template>
  <div class="carousel">
    <n-carousel autoplay dot-type="line" show-arrow>
      <img
        class="carousel-img"
        v-for="item in carouselList"
        :key="item.id"
        :src="item.img"
        alt=""
      />
    </n-carousel>
  </div>
</template>

<style lang="scss">
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
