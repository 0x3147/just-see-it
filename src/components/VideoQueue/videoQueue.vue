<script setup lang="ts">
import type { PropType } from 'vue'
import { ColorWandOutline, Play, ThumbsUpSharp } from '@vicons/ionicons5'
import router from '@/router'
import { formatSeconds } from '@/utils/time-format'

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
      <div class="video-info">
        <n-space justify="space-around" align="center">
          <n-space>
            <n-icon class="icon-style" :component="Play" size="15" />
            <span class="info-font">{{ item.play_times }}</span>
          </n-space>
          <n-space>
            <n-icon class="icon-style" :component="ThumbsUpSharp" size="15" />
            <span class="info-font">{{ item.good }}</span>
          </n-space>
          <span class="info-font">{{ formatSeconds(item.duration) }}</span>
        </n-space>
      </div>
      <div class="video-list-content-item-detail">
        <p class="video-list-content-desc">{{ item.name }}</p>
        <n-space align="center">
          <n-icon class="video-list-content-author" :component="ColorWandOutline" />
          <p class="video-list-content-author">{{ item.author.name }}</p>
        </n-space>
      </div>
      <div class="cover" @click="goDetail(item.id)">
        <n-icon :component="Play" size="24" />
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
    position: relative;
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

    .video-info {
      width: 100%;
      position: absolute;
      bottom: 80px;

      .info-font {
        font-size: 12px;
        line-height: 14px;
        color: #fff;
      }
    }

    .cover {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      left: 0;
      color: #fff;
      right: 0;
      top: 0;
      opacity: 0;
      width: 100%;
      height: 150px;
      position: absolute;
      transition: all 0.2s linear;
      background-color: rgba(0, 0, 0, 0.6);
      font-size: 12px;
      cursor: pointer;
    }

    &:hover {
      .cover {
        opacity: 1;
        bottom: 0;
      }

      .video-info {
        display: none;
      }
    }
  }

  .icon-style {
    color: #fff;
  }
}
</style>
