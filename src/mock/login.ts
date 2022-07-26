import Mock from 'mockjs'
export default {
  getLoginData: () => {
    return {
      code: 200,
      data: {
        userInfo: {
          name: '张三',
          email: 'fassfssaf@163.com',
          phone: 421124124,
          password: 'sfadssafa'
        }
      }
    }
  }
}
