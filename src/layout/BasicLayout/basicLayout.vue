<script setup lang="ts">
import AppHeader from '@/components/AppHeader/appHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

defineOptions({ name: 'basicLayout' })
</script>

<template>
  <div class="layout">
    <AppHeader />
    <div class="content">
      <router-view />
    </div>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
.content {
  min-height: calc(100vh - 140px);
  background: #f1f1f1;
}
</style>
