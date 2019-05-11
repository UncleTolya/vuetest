<template>
  <div>
    <h1>User id {{ id }}</h1>
    <button class="btn btn-small btn-warning m-2" @click="goBackToUsers">Back to users list</button>
    <br>
    <router-link
      tag="button"
      class="btn btn-info m-2"
      :to="{name: 'userFull', params:{id: id}, hash: '#scroll'}"
    >
      Show fingerprints
    </router-link>
    <hr>
    <router-view :id="id">

    </router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.params['id'],
      }
    },
    methods: {
      goBackToUsers() {
        this.$router.push('/users')
      }
    },
    watch: {
      $route(toR, fromR) {
        this.id = toR.params['id']
      }
    },
    // beforeRouteEnter(to, fromR, next) {
    //   let cars = [1, 2, 3, 4, 5];
    //   if (cars.includes(+to.params.id)) {
    //     next(true);
    //   } else {
    //     next('/error');
    //   }
    // },
    // beforeRouteLeave(to, fromR, next) {
    //   next(window.confirm('Покинуть страницу?'));
    // }
  }
</script>

<style scoped>

</style>
