<template>
  <v-app id="app">
    <v-toolbar dark color="primary">
      <v-toolbar-title >Book Store</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn @click.native="$router.push('/')" flat>Books</v-btn>
        <v-btn @click.native="$router.push('/order')" flat>Order</v-btn>
        <v-btn @click.native="$router.push('/login')" flat>Login</v-btn>
        <v-btn @click.native="$router.push('/register')" flat>Register</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <router-view/>
  </v-app>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
