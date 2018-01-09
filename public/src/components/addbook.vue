<template>
  <v-card class="login" ref="form" max-width="300">
    <v-card-title>添加书籍</v-card-title>
    <v-form v-model="valid" ref="form" lazy-validation>
      <v-text-field
        label="书名"
        v-model="name"
        required
      ></v-text-field>
      <v-text-field
        label="价格"
        v-model="price"
        required
      ></v-text-field>
      <v-text-field
        label="主书籍编号"
        v-model="mainbook"
        required
      ></v-text-field>
      <v-text-field
        label="出版商"
        v-model="publish"
        required
      ></v-text-field>
      <v-text-field
        label="作者（分号隔开）"
        v-model="author"
        required
      ></v-text-field>
      <v-text-field
        label="关键词（分号隔开）"
        v-model="keyword"
        required
      ></v-text-field>
      <v-btn
        @click="submit"

      >
        添加
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
      name: "",
      price: 0,
      mainbook: 0,
      publish: "",
      author: "",
      keyword: "",
    }
  },
  methods: {
    submit() {
      let __this = this

        axios.post('/api/book', {
          name: this.name,
          price: this.price,
          mainbook: this.mainbook,
          publish: this.publish,
          author: JSON.stringify(this.author.split(";")),
          keyword: JSON.stringify(this.keyword.split(";")),
        }).then(
          e => {
            if(e) {
              if (e.data.done) {
                alert("添加成功")
                __this.$router.push("/")
              } else alert(e.data.message)
            } else alert("添加失败请重试")
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
