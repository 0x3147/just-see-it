export interface IUserInfo {
  user_id: string
  nickname: string
  signature?: string
  avatar?: string
  mobile?: string
  sex: string
  birthday?: string
}

export interface IUserStoreState {
  token: string
  userInfo: IUserInfo
}
