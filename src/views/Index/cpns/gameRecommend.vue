<script setup lang="ts">
import { reactive } from 'vue'
import { ThumbsUpSharp, GameController } from '@vicons/ionicons5'
import AreaTopBar from '@/components/AreaTopBar/areaTopBar.vue'
import RightAreaTopBar from '@/components/AreaTopBar/rightAreaTopBar.vue'
import VideoQueue from '@/components/VideoQueue/videoQueue.vue'

interface IList {
  id: string
  img: string
  name: string
  author: { id: string; name: string }
  play_times: number
  good: number
  duration: number
}

const f4_list = reactive<IList[]>([
  {
    id: '1',
    img: 'src/assets/background1.jpg',
    name: '这是测试1',
    author: { id: '111', name: '0x3147' },
    play_times: 1000,
    good: 200,
    duration: 1000
  },
  {
    id: '2',
    img: 'src/assets/background1.jpg',
    name: '这是测试2',
    author: { id: '111', name: '0x3147' },
    play_times: 1000,
    good: 200,
    duration: 1000
  },
  {
    id: '3',
    img: 'src/assets/background1.jpg',
    name: '这是测试3',
    author: { id: '111', name: '0x3147' },
    play_times: 1000,
    good: 200,
    duration: 1000
  },
  {
    id: '4',
    img: 'src/assets/background1.jpg',
    name: '这是测试4',
    author: { id: '111', name: '0x3147' },
    play_times: 1000,
    good: 200,
    duration: 1000
  },
  {
    id: '5',
    img: 'src/assets/background1.jpg',
    name: '这是测试5',
    author: { id: '111', name: '0x3147' },
    play_times: 1000,
    good: 200,
    duration: 1000
  },
  {
    id: '6',
    img: 'src/assets/background1.jpg',
    name: '这是测试6',
    author: { id: '111', name: '0x3147' },
    play_times: 1000,
    good: 200,
    duration: 1000
  },
  {
    id: '7',
    img: 'src/assets/background1.jpg',
    name: '这是测试7',
    author: { id: '111', name: '0x3147' },
    play_times: 1000,
    good: 200,
    duration: 1000
  },
  {
    id: '8',
    img: 'src/assets/background1.jpg',
    name: '这是测试8',
    author: { id: '111', name: '0x3147' },
    play_times: 1000,
    good: 200,
    duration: 1000
  }
])

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

/**
 * @desc 重载推荐视频
 * @Author bk0x114
 * @Date 2023-07-01 16:56:33
 */
const handleReload = () => {
  console.log('换一换')
  // TODO
}

/**
 * @desc 加载更多
 * @Author bk0x114
 * @Date 2023-07-01 16:56:17
 */
const goList = () => {
  console.log('更多')
  // TODO
}

const loadMoreRanking = () => {
  console.log('加载更多')
  // TO DO
}
</script>

<template>
  <div class="game-recommend">
    <div class="left">
      <AreaTopBar
        bar-title="游戏"
        :is-bar-broad="false"
        :handle-reload="handleReload"
        :go-list="goList"
      >
        <template #iconSet>
          <n-icon class="left-icon" :component="GameController" size="20" />
        </template>
      </AreaTopBar>
      <VideoQueue :video-list="f4_list" />
    </div>
    <div class="right">
      <RightAreaTopBar bar-title="热门游戏榜" :go-list="loadMoreRanking">
        <template #iconSet>
          <n-icon class="right-icon" :component="ThumbsUpSharp" size="20" />
        </template>
      </RightAreaTopBar>
      <n-carousel class="right-carousel" autoplay dot-placement="right">
        <img
          class="carousel-img"
          v-for="item in carouselList"
          :key="item.id"
          :src="item.img"
          alt=""
        />
      </n-carousel>
    </div>
  </div>
</template>

<style scoped lang="scss">
.game-recommend {
  display: flex;
  column-gap: 10px;
}

.left {
  display: flex;
  flex-direction: column;

  .left-icon {
    color: #ff6666;
  }
}

.right {
  display: flex;
  flex-direction: column;
  width: 330px;

  .right-icon {
    color: #cc3333;
  }

  .right-carousel {
    margin-top: 10px;
  }

  .carousel-img {
    width: 100%;
    height: 392px;
    object-fit: cover;
  }
}
</style>
