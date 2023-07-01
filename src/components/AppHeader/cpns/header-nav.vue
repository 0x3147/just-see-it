<script setup lang="ts">
import { ref } from 'vue'

interface singleRoute {
  path: string
  name: string
}

const active = ref(0)
const routeList = ref<singleRoute[]>([
  {
    path: '/',
    name: '主站'
  },
  {
    path: '/video/list/hot',
    name: '特别推荐'
  },
  {
    path: '/video/OnlineList/',
    name: '直播'
  },
  {
    path: '/video/list/funny',
    name: '搞笑'
  },
  {
    path: '/video/list/science',
    name: '科幻'
  },
  {
    path: '/video/list/game',
    name: '游戏'
  },
  {
    path: '/video/list/sports',
    name: '体育'
  },
  {
    path: '/video/list/music',
    name: '音乐'
  }
])
</script>

<template>
  <div class="header-nav">
    <ul>
      <router-link v-for="(item, index) in routeList" :to="item.path" :key="index">
        <li :class="index == active ? 'active' : ''" @click="active = index">
          <span class="router-item">{{ item.name }}</span>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<style lang="scss">
.header-nav {
  display: flex;

  .active {
    color: #fff;
  }

  ul {
    display: flex;
    gap: 8px;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      height: 75px;
      line-height: 75px;
      cursor: pointer;
      transition: all 0.3s;
      border-radius: 10px;

      &:hover {
        background-color: skyblue;
      }

      span {
        font-size: 14px;
        color: #333;
      }
    }
  }

  .router-item {
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
