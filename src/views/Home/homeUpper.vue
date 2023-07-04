<script setup lang="ts">
import useUserStore from '@/store/module/user/userStore'

const userStore = useUserStore()
</script>

<template>
  <div class="home-upper">
    <div class="home-upper-content">
      <n-avatar round :src="userStore.userInfo.avatar" :size="80" />
      <div>
        <p class="nick-name">{{ userStore.userInfo.nickname }}</p>
        <div class="follow-list">
          <div class="follow-list-item">
            <span>0</span>
            <span>关注</span>
          </div>
          <div class="follow-list-item">
            <span>0</span>
            <span>粉丝</span>
          </div>
          <div class="follow-list-item">
            <span>0</span>
            <span>文章</span>
          </div>
        </div>
      </div>
      <n-button type="info" round>编辑资料</n-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-upper {
  width: 1170px;
}

.home-upper-content {
  display: flex;
  column-gap: 50px;
  align-items: center;
}

.follow-list {
  display: flex;
  column-gap: 8px;

  .follow-list-item {
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
    border-right: 1px solid #ccc;
    cursor: pointer;

    &:hover {
      color: #409eff;
    }
  }

  .follow-list-item:last-child {
    border: none;
  }
}

.nick-name {
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
}
</style>
