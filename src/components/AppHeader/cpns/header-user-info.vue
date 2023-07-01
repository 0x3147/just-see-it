<script setup lang="ts">
import { reactive, ref } from 'vue'
import { CaretDown } from '@vicons/ionicons5'

const num = ref(99)
const dropDownOptions = reactive([
  { label: '个人中心', key: 'personal center', props: { onClick: () => {} } },
  { label: '创作中心', key: 'creation center', props: { onClick: () => {} } },
  { label: '发起直播', key: 'start live', props: { onClick: () => {} } },
  { label: '数据中心', key: 'data', props: { onClick: () => {} } },
  { label: '我的资料', key: 'info', props: { onClick: () => {} } },
  { label: '发布视频', key: 'publish video', props: { onClick: () => {} } },
  { label: '退出登录', key: 'logout', props: { onClick: () => {} } }
])
</script>

<template>
  <div class="header-user-info">
    <n-space justify="space-between">
      <n-badge :value="num" :max="99">
        <n-avatar round>App</n-avatar>
      </n-badge>
      <n-dropdown trigger="hover" :options="dropDownOptions">
        <n-icon :component="CaretDown" />
      </n-dropdown>
    </n-space>
  </div>
</template>

<style lang="scss"></style>
