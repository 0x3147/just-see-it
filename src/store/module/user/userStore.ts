import { defineStore } from 'pinia'

import type { IUserStoreState } from './type'

const useUserStore = defineStore('user', {
  state: (): IUserStoreState => ({
    token: '',
    userInfo: {
      user_id: '1111',
      nickname: '0x3147',
      signature: 'emmmm',
      avatar: '',
      mobile: '',
      sex: '2',
      birthday: ''
    }
  }),
  actions: {}
})

export default useUserStore
