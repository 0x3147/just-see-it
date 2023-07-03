<script setup lang="ts">
import { ChevronForwardOutline } from '@vicons/ionicons5'

interface IProps {
  barTitle: string
  goList: () => void
}

withDefaults(defineProps<IProps>(), {
  barTitle: '',
  goList: () => {}
})
</script>

<template>
  <div class="right-top-bar">
    <n-space justify="space-between" align="center">
      <n-space>
        <slot name="iconSet" />
        <span>{{ barTitle }}</span>
      </n-space>
      <n-button size="tiny" icon-placement="right" @click="goList">
        更多
        <template #icon>
          <n-icon :component="ChevronForwardOutline" />
        </template>
      </n-button>
    </n-space>
  </div>
</template>

<style scoped lang="scss">
.right-top-bar {
  margin-top: 15px;
  width: 330px;
}
</style>
