<template>
  <div style="padding: 20px">
    <h3>1. 登录</h3>
    <input v-model="username" placeholder="用户名"/>
    <input v-model="password" placeholder="密码" type="password"/>
    <button @click="login">登录</button>

    <h3>2. 用户信息</h3>
    <button @click="loadUser">获取用户</button>
    <pre>{{ userInfo }}</pre>

    <h3>3.验证码</h3>
    <button>测试</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import request from '@/api/request'

const username = ref('')
const password = ref('')
const userInfo   = ref('')

function login() {
  request.post('/login', null, {
    params: { u: username.value, p: password.value }
  }).then(res => userInfo.value = res.data)
}

function loadUser() {
  request.get('/user').then(res => userInfo.value = res.data)
}
</script>