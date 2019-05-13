<template>
  <div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

  import UsersPage from "./pages/Users";
  export default {
    components: {UsersPage},
  }
</script>

<style scoped>
</style>
