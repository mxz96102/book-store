<template>
  <v-card class="login" max-width="300">
    <v-card-title>登陆</v-card-title>
    <v-form v-model="valid" ref="form" lazy-validation>
      <v-text-field
        label="用户名"
        v-model="username"
        :counter="10"
        required
      ></v-text-field>
      <v-text-field
        label="密码"
        v-model="password"
        type="password"
        required
      ></v-text-field>
      <v-btn
        @click="submit"
      >
        登陆
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>
import axios from "axios"

export default {
  name: 'Login',
  data () {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    clear () {
      this.username=""
      this.password= ""
    },
    submit() {
      let __this = this
      axios.post('/api/user/login',{username: this.username,
        password: this.password}).then(
          e => {
            if(e) {
              if (e.data.done) {
                alert("登陆成功")
                __this.$router.push("/")
              } else alert(e.data.message)
            } else alert("登陆失败请重试")
          }
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login {
    width: 300px;
    margin: 20px auto 0 auto;
    padding: 20px;
  }
</style>
