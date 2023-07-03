<script setup lang="ts">
import { Flame, ReloadOutline, ChevronForwardOutline } from '@vicons/ionicons5'

interface IProps {
  isBarBroad: boolean
  barTitle: string
  handleReload: () => void
  goList: () => void
}

withDefaults(defineProps<IProps>(), {
  isBarBroad: true,
  barTitle: '',
  handleReload: () => {},
  goList: () => {}
})
</script>

<template>
  <div :class="isBarBroad ? 'lg-top-bar' : 'sm-top-bar'">
    <n-space justify="space-between" align="center">
      <n-space>
        <n-icon :component="Flame" size="20" />
        <span>{{ barTitle }}</span>
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
</template>

<style scoped lang="scss">
.lg-top-bar {
  margin-top: 15px;
  width: 1170px;
}

.sm-top-bar {
  margin-top: 15px;
  width: 840px;
}
</style>
