<script setup lang="ts">
import { reactive } from 'vue'
import { BarChartOutline, Flame } from '@vicons/ionicons5'
import AreaTopBar from '@/components/AreaTopBar/areaTopBar.vue'
import RightAreaTopBar from '@/components/AreaTopBar/rightAreaTopBar.vue'
import VideoQueue from '@/components/VideoQueue/videoQueue.vue'
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

interface IRanking {
  title: string
}

const f3_list = reactive<IList[]>([
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

const f3_ranking = reactive<IRanking[]>([
  {
    title: '凡人修仙传骗投资？糊弄观众？导演抵押房子卑微解释！难道一定要毁了它吗？'
  },
  {
    title: '我被MIT哈佛CMU录取了！计算机博士申请季纪实'
  },
  {
    title: '【唐宇迪】数据挖掘和数据分析有什么区别？学哪个好就业？'
  },
  {
    title: '周杰伦北大演讲：你可以不平凡 完整版'
  },
  {
    title: '李沐老师：GPT时代AI怎么学？ 动手学就是了！'
  },
  {
    title: '特斯拉改装120寸轮毂，增加“逆天”功能'
  },
  {
    title: '日本泡沫经济时期的负遗产!堆满废墟酒店的栃木县鬼怒川温泉!'
  },
  {
    title: '一口气了解硅谷银行倒闭危机'
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
}
</script>

<template>
  <div class="hot-video">
    <div class="left">
      <AreaTopBar
        bar-title="热点"
        :is-bar-broad="false"
        :handle-reload="handleReload"
        :go-list="goList"
      >
        <template #iconSet>
          <n-icon class="top-bar-icon" :component="Flame" size="20" />
        </template>
      </AreaTopBar>
      <VideoQueue :video-list="f3_list" />
    </div>
    <div class="right">
      <RightAreaTopBar bar-title="排行榜" :go-list="loadMoreRanking">
        <template #iconSet>
          <n-icon :component="BarChartOutline" size="20" />
        </template>
      </RightAreaTopBar>
      <div class="right-content">
        <div class="right-content-item" v-for="(item, index) in f3_ranking" :key="index">
          <p class="right-content-item-word">
            <span :class="'rank-index ' + (index <= 2 ? 'active' : '')">{{ index + 1 }}</span>
            <span style="margin-left: 8px">{{ item.title }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hot-video {
  display: flex;
  column-gap: 10px;
}

.left {
  display: flex;
  flex-direction: column;

  .top-bar-icon {
    color: red;
  }
}

.right {
  display: flex;
  flex-direction: column;
  width: 330px;

  .right-content {
    margin-top: 10px;
    display: flex;
    flex-direction: column;

    .right-content-item-word {
      text-align: left;
      font-weight: 600;
      font-size: 14px;
      line-height: 16px;
      cursor: pointer;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      .rank-index {
        display: inline-block;
        border-radius: 5px;
        width: 24px;
        line-height: 24px;
        height: 24px;
        color: #999;
        text-align: center;
      }

      .active {
        background: #00a1d6;
        color: #fff;
      }
    }
  }
}
</style>
