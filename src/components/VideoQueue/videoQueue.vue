<script setup lang="ts">
import type { PropType } from 'vue'
import { ColorWandOutline } from '@vicons/ionicons5'
import router from '@/router'

interface IList {
  id: string
  img: string
  name: string
  author: { id: string; name: string }
  play_times: number
  good: number
  duration: number
}

defineProps({
  videoList: Array as PropType<IList[]>
})

/**
 * @desc 跳转视频详情页
 * @Author bk0x114
 * @Date 2023-07-01 16:56:03
 * @param id 视频id
 */
const goDetail = (id: string) => {
  router.push('/video/detail/' + id)
}
</script>

<template>
  <div class="video-list-content">
    <div class="video-list-content-item" v-for="item in videoList" :key="item.id">
      <img :src="item.img" alt="" @click="goDetail(item.id)" />
      <div class="video-list-content-item-detail">
        <p class="video-list-content-desc">{{ item.name }}</p>
        <n-space align="center">
          <n-icon class="video-list-content-author" :component="ColorWandOutline" />
          <p class="video-list-content-author">{{ item.author.name }}</p>
        </n-space>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.video-list-content {
  margin-top: 10px;
  display: flex;
  width: 840px;
  flex-wrap: wrap;
  column-gap: 5px;
  row-gap: 10px;

  .video-list-content-item {
    display: flex;
    flex-direction: column;
    width: 206px;

    .video-list-content-item-detail {
      display: flex;
      flex-direction: column;
    }

    .video-list-content-desc {
      font-weight: 600;
      font-size: 14px;
      line-height: 16px;
      cursor: pointer;
      word-break: break-all;
    }

    .video-list-content-author {
      font-size: 12px;
      line-height: 14px;
      color: #999;
    }

    img {
      width: 100%;
      height: 150px;
    }
  }
}
</style>
