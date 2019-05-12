<template>
      <div id="app">
        <v-app id="inspire">
          <h1 class="text-xl-center">ALL USERS IN DATABASE</h1>
          <loading v-if="isNoLoad"></loading>
          <v-container fluid grid-list-md>
            <v-layout row wrap>
              <router-link tag="v-flex" v-for="user in users" :to="'/user/' + user.userId"
                           :key="user.userId">
                <div class="text-xs-center">
                  <v-chip>
                    <v-avatar>
                      <img :src="getLastPrint(user).photoSmall" :alt="user.userId + 'avatar'">
                    </v-avatar>
                    {{ getLastPrint(user).firstName}} {{ getLastPrint(user).lastName}}
                  </v-chip>
                </div>
              </router-link>
            </v-layout>
          </v-container>
        </v-app>
      </div>
</template>

<script>
  import UserListMixin from '../mixins/mix_usersList.js'
  import Loading from "../components/Loading";

  export default {
    name: 'usersPage',
    data() {
      return {
        isNoLoad: true
      }
    },
    components: {Loading},
    mixins: [UserListMixin],
    methods: {
      getLastPrint(user) {
        this.isNoLoad = false;
        return user.fingerPrints[user.fingerPrints.length-1];
      }
    },
    computed: {
      getIds() {
        return this.users.map(user => user.userId);
      },
    },
  }
</script>

<style scoped>
</style>
