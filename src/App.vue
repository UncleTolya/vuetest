<template>
  <div>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav">
<!--            <router-link tag="li" class="nav-item" exact :to="'/users'" active-class="active">-->
<!--              <a class="nav-link">Users</a>-->
<!--            </router-link>-->
          </ul>
        </div>
      </nav>
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
