<template>
  <v-card class="pvdbook" ref="form" max-width="300">
    <v-card-title>添加书籍</v-card-title>
    <v-form v-model="valid" ref="form" lazy-validation>
      <v-text-field
        label="供货量"
        v-model="inventory"
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
        inventory: 0,
      }
    },
    methods: {
      submit() {
        let __this = this


        axios.post('/api/pvd/book', {
          inventory: this.inventory,
          bookNo: this.$route.params.id
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
  .pvdbook {
    width: 300px;
    margin: 20px auto 0 auto;
    padding: 20px;
  }
</style>
