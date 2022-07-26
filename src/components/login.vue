<template>
  <div class="main">
    <div class="form">
      <el-form ref="loginFormRef" :model="loginForm" class="form">
        <el-form-item>
          <el-input ref="userNameRef" v-model="loginForm.username" placeholder="手机号/用户名/邮箱" style="width: 300px; margin: 30px 0 0 25px">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input ref="passwordRef" v-model="loginForm.password" type="password" placeholder="密码" style="width: 300px;  margin: 0 0 10px 25px">
          </el-input>
        </el-form-item>
        <el-link type="primary" @click="forgetPassword" style="position:relative; left: 75%;top: -10%">忘记密码</el-link>
        <el-button type="primary" style="width: 200px;height: 30px;margin-top: 20px;margin-left: 10px" round @click="login">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent, ref, toRefs } from 'vue'
import { ElMessage } from 'element-plus'
import http from '@/api/config'
export default defineComponent({
  components: {},
  setup () {
    const loginFormRef = ref(null)
    const userNameRef = ref(null)
    const passwordRef = ref(null)
    const state = reactive({
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ validator: userNameRef, trigger: 'blur' }],
        password: [{ validator: passwordRef, trigger: 'blur' }]
      },
      passwordType: 'password',
      loading: false,
      showDialog: false,
      capsTooltip: false,
      redirect: '',
      otherQuery: {}
    })
    const methods = reactive({
      validatePassword: (rule: any, value: string, callback: CallableFunction) => {
        if (value.length < 6) {
          callback(new Error('The password can not be less than 6 digits'))
        } else {
          callback()
        }
      },
      forgetPassword: () => {
        ElMessage.success('忘记密码')
      },
      login: () => {
        http.post('/api/login', {
          username: userNameRef.value,
          password: passwordRef.value
        }).then(res => {
          ElMessage.success('登录成功!')
          // eslint-disable-next-line handle-callback-err
        }).catch(err => {
          ElMessage.error('登录失败!')
        })
      }
    })
    return {
      loginFormRef,
      userNameRef,
      passwordRef,
      ...toRefs(state),
      ...toRefs(methods)
    }
  }

})

// const onSubmit = () => {
//   console.log('success')
// }

</script>
<style>
.main{
  width: 100%;
  height: 800px;
  background: cornflowerblue;
  display: flex;
}
.form{
  width: 350px;
  height: 250px;
  margin: auto;
  background: white;
}

</style>
