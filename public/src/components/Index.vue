<template>
  <div class="index">
    <v-data-table
      v-bind:headers="headers"
      :items="items"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-right">{{ props.item.BookNo }}</td>
        <td class="text-xs-right"><v-btn @click.native="openIt(props.item.BookNo)" flat>{{ props.item.Name }}</v-btn></td>
        <td class="text-xs-right">{{ props.item.Price }}</td>
        <td class="text-xs-right">{{ props.item.Publish }}</td>
      </template>
    </v-data-table>
    <v-btn color="primary" @click.native="$router.push('/add/book')">添加书籍</v-btn>
    <v-dialog v-model="dialog">
      <v-card class="text-xs-left" max-width="350">
        <v-card-title class="headline">{{info.name}}</v-card-title>
        <v-card-text>价格：¥{{info.price}}</v-card-text>
        <v-card-text>出版社：{{info.publish}}</v-card-text>
        <v-card-text>作者：<v-chip v-for="item in info.author">{{item}}</v-chip></v-card-text>
        <v-card-text>关键词：<v-chip v-for="item in info.keyword">{{item}}</v-chip></v-card-text>
        <v-card-text>库存：{{info.inventory}}</v-card-text>
        <v-card-text>供货商：<v-chip v-for="item in info.provider">{{item.ProviderName}} ({{item.Inventory}})</v-chip></v-card-text>
        <v-card-actions>
          <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">关闭</v-btn>
          <v-btn color="green darken-1" flat="flat" @click.native="$router.push('/pvd/book/'+info.id)">供货书籍</v-btn>
          <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">购买</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'index',
    data () {
      let __this = this;

      axios.get("/api/book").then(
        data => {
          if (data) {
            __this.items = data.data.data
          }
        }
      )

      return {
        headers : [
          { text: '书号', value: 'BookNo' },
          { text: '书名', value: 'Name' },
          { text: '价格', value: 'Price' },
          { text: '出版社', value: 'Publish' },
        ],
        items : [],
        dialog : false,
        info: {}
      }
    },
    methods: {
      openIt(id) {
        let __this = this;

        axios.get("/api/book/detail/"+id).then(
          data => {
            if (data) {
              __this.info = data.data
              __this.dialog = true
            }
          }
        )
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
