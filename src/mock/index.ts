// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Mock from 'mockjs'
import login from '@/mock/login'
Mock.setup({
  timeout: '200-2000'
})
Mock.mock(/\/api\/login/, 'post', login.getLoginData())
