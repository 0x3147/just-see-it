<script setup lang="ts">
import HomeUpper from './homeUpper.vue'
import HomeBelow from './homeBelow.vue'
</script>

<template>
  <div class="home">
    <div class="home-container">
      <HomeUpper />
      <HomeBelow />
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  padding-top: 60px;
}

.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
</style>
