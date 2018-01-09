<template>
  <v-card class="register" max-width="300">
    <v-card-title>注册</v-card-title>
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
        注册
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>
import axios from "axios"
import VCardTitle from "vuetify/src/components/VCard/VCardTitle";

export default {
  components: {VCardTitle},
  name: 'Register',
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

      axios.post('/api/user/register',{username: this.username,
        password: this.password}).then(
          e => {
            if(e) {
              if (e.data.done) {
                alert("注册成功")
                __this.$router.push("/login")
              } else alert(e.data.message)
            } else alert("注册失败请重试")
          }
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .register {
    width: 300px;
    margin: 20px auto 0 auto;
    padding: 20px;
  }
</style>
