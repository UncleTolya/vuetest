<template>
    <div>
      <h1>All users in DB</h1>
      <ul>
        <router-link
          tag="li"
          v-for="userId in getIds"
          :to="'/user/' + userId"
          :key="userId"
          >
          User {{ userId }}
        </router-link>
      </ul>
    </div>
</template>

<script>
  import UserListMixin from '../mixins/mix_usersList.js'

  export default {
    name: 'usersPage',
    mixins: [UserListMixin],
    computed: {
      getIds() {
        return this.users.map(user => user.userId);
      }
    }
  }
</script>

<style scoped>
</style>
