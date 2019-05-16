<template>
  <div id="app" class="container">
<!--    <h1>{{ users[0] }}</h1>-->
    <loading v-if="isNoLoad" :user="getUser"></loading>
    <v-app v-if="!isNoLoad" id="inspire">
      <v-layout row>
        <v-flex>
          <v-card>

            <v-img :src="getLastPrint(getUser).photoLarge" height="300px">
              <v-layout column fill-height>
                <v-card-title>
                  <v-btn dark icon @click="goBackToUsers">
                    <v-icon>chevron_left</v-icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                </v-card-title>
              </v-layout>
            </v-img>

            <v-list two-line>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>{{ getLastPrint(getUser).firstName }} {{ getLastPrint(getUser).lastName }}
                  </v-list-tile-title>
                  <v-list-tile-sub-title>NAME</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider inset></v-divider>
              <v-list-tile :href="getLastPrint(getUser).url" target="_blank">
                <v-list-tile-content>
                  <v-list-tile-title>ID {{getLastPrint(getUser).id}}</v-list-tile-title>
                  <v-list-tile-sub-title>VK LINK</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider inset></v-divider>
              <user-states-time-line :user="getUser"></user-states-time-line>
            </v-list>

          </v-card>
        </v-flex>
      </v-layout>
    </v-app>

  </div>
</template>

<script>
  import UserListService from '../mixins/userListService.js';
  import UserStatesTimeLine from "../components/user-timeline/UserTimeLine";
  import UserStates from "../components/user-timeline/UserStates";
  import Loading from "../components/Loading";

  export default {
    components: {UserStatesTimeLine, UserStates, Loading},
    mixins: [UserListService],
    data() {
      return {
        id: this.$route.params['id'],
        isNoLoad: true
      }
    },
    methods: {
      goBackToUsers() {
        this.$router.push('/users')
      },
      getLastPrint(user) {
        return user.states[user.states.length - 1];
      }
    },
    computed: {
      getUser() {
        for (const user of this.users) {
          if (user.userId == this.id) {
            this.isNoLoad = false
            return user;
          }
        }
      }
    },
    watch: {
      $route(toR, fromR) {
        this.id = toR.params['id']
      }
    },
  }
</script>

<style scoped>

</style>
