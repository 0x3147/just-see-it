<script setup lang="ts">
import { reactive } from 'vue'
import router from '@/router'
import { Flame, ReloadOutline, ChevronForwardOutline, PlayCircleOutline } from '@vicons/ionicons5'

interface IList {
  id: string
  img: string
  name: string
  author: { id: string; name: string }
  play_times: number
}

interface IMainRecommend {
  id: string
  img: string
  name: string
  list: IList[]
}

const main_recommend = reactive<IMainRecommend>({
  id: '1',
  img: 'src/assets/background1.jpg',
  name: '仅仅是测试啦',
  list: [
    {
      id: '1',
      img: 'src/assets/background1.jpg',
      name: '这是测试1',
      author: { id: '111', name: '0x3147' },
      play_times: 1000
    },
    {
      id: '2',
      img: 'src/assets/background1.jpg',
      name: '这是测试2',
      author: { id: '111', name: '0x3147' },
      play_times: 1000
    },
    {
      id: '3',
      img: 'src/assets/background1.jpg',
      name: '这是测试3',
      author: { id: '111', name: '0x3147' },
      play_times: 1000
    },
    {
      id: '4',
      img: 'src/assets/background1.jpg',
      name: '这是测试4',
      author: { id: '111', name: '0x3147' },
      play_times: 1000
    },
    {
      id: '5',
      img: 'src/assets/background1.jpg',
      name: '这是测试5',
      author: { id: '111', name: '0x3147' },
      play_times: 1000
    },
    {
      id: '6',
      img: 'src/assets/background1.jpg',
      name: '这是测试6',
      author: { id: '111', name: '0x3147' },
      play_times: 1000
    }
  ]
})

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
  <div class="recommend-title">
    <n-space justify="space-between" align="center">
      <n-space>
        <n-icon :component="Flame" size="20" />
        <span>特别推荐</span>
      </n-space>
      <n-space>
        <n-button size="tiny" @click="handleReload">
          换一换
          <template #icon>
            <n-icon :component="ReloadOutline" />
          </template>
        </n-button>
        <n-button size="tiny" icon-placement="right" @click="goList">
          更多
          <template #icon>
            <n-icon :component="ChevronForwardOutline" />
          </template>
        </n-button>
      </n-space>
    </n-space>
  </div>
  <div class="recommend">
    <div class="recommend-left">
      <img :src="main_recommend.img" alt="" @click="goDetail(main_recommend.id)" />
      <n-p class="video-name">{{ main_recommend.name }}</n-p>
      <div class="left-cover" @click="goDetail(main_recommend.id)">
        <n-icon :component="PlayCircleOutline" size="40" />
      </div>
    </div>
    <div class="recommend-right">
      <div class="recommend-right-item" v-for="item in main_recommend.list" :key="item.id">
        <img :src="item.img" alt="" @click="goDetail(item.id)" />
        <div class="right-video-name">
          <p>{{ item.name }}</p>
        </div>
        <div class="right-cover" @click="goDetail(item.id)">
          <p>作者: {{ item.author.name }}</p>
          <p>播放量: {{ item.play_times }}</p>
          <n-icon :component="PlayCircleOutline" size="24" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.recommend-title {
  margin-top: 15px;
  width: 1170px;
}

.recommend {
  display: flex;

  .recommend-left {
    width: 520px;
    height: 248px;
    display: inline-block;
    margin-right: 10px;
    position: relative;
    overflow: hidden;
    border-radius: 2px;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .left-cover {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      left: 0;
      right: 0;
      top: 0;
      opacity: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      transition: all 0.2s linear;
      background-color: rgba(0, 0, 0, 0.6);
    }

    .video-name {
      width: 100%;
      font-size: 14px;
      color: #fff;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      box-sizing: border-box;
      position: absolute;
      bottom: -15px;
      background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8));
    }

    &:hover {
      .video-name {
        display: none;
      }

      .left-cover {
        opacity: 1;
        bottom: 0;
      }
    }
  }

  .recommend-right {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    width: 650px;

    .recommend-right-item {
      position: relative;
      width: 210px;
      height: 120px;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .right-cover {
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
        height: 100%;
        position: absolute;
        transition: all 0.2s linear;
        background-color: rgba(0, 0, 0, 0.6);
        font-size: 12px;
      }

      .right-video-name {
        width: 100%;
        position: absolute;
        bottom: 0;
        display: flex;
        font-size: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        box-sizing: border-box;
        color: #fff;
        background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8));
      }

      &:hover {
        .right-video-name {
          display: none;
        }

        .right-cover {
          opacity: 1;
          bottom: 0;
        }
      }
    }
  }
}
</style>
