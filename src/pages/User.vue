<template>
  <div id="app" class="container">
    <v-app id="inspire">
      <v-layout row>
        <v-flex>
          <v-card>
            <v-img
              :src="getLastPrint(getUser).photoLarge"
              height="300px"
            >
              <v-layout
                column
                fill-height
              >
                <v-card-title>
                  <v-btn dark icon @click="goBackToUsers">
                    <v-icon>chevron_left</v-icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                </v-card-title>

                <v-spacer></v-spacer>

                <v-card-title class="white--text pl-5 pt-5">
                  <div class="display-1 pl-5 pt-5">

                  </div>
                </v-card-title>
              </v-layout>
            </v-img>

            <v-list two-line>
              <v-list-tile>

                <v-list-tile-content>
                  <v-list-tile-title>{{ getLastPrint(getUser).firstName }} {{ getLastPrint(getUser).lastName }}</v-list-tile-title>
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

<!--              <router-link tag="v-list-tile" :to="{name: 'userFull', params:{id: id}, hash: '#scroll'}">-->
<!--                <v-list-tile-content>-->
<!--                  <v-list-tile-title @click="showTimeLine = !showTimeLine" class="text-xl-center" style="font-size: 30px">SHOW FINGERPRINTS</v-list-tile-title>-->
<!--                </v-list-tile-content>-->
<!--              </router-link>-->
<!--              <router-link tag="v-list-tile" :to="{name: 'userTL', params:{id: id}, hash: '#scroll'}">-->
<!--                <v-list-tile-content>-->
<!--                  <v-list-tile-title @click="showTimeLine = !showTimeLine" class="text-xl-center" style="font-size: 30px">development version</v-list-tile-title>-->
<!--                </v-list-tile-content>-->
<!--              </router-link>-->
<!--              <router-view v-if="showTimeLine" :id="id"></router-view>-->
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

  export default {
    components: {UserStatesTimeLine, UserStates},
    mixins: [UserListService],
    data() {
      return {
        id: this.$route.params['id'],
      }
    },
    methods: {
      goBackToUsers() {
        this.$router.push('/users')
      },
      getLastPrint(user) {
        return user.states[user.states.length-1];
      }
    },
    computed: {
      getUser() {
        for (const user of this.users) {
          if (user.userId == this.id) {
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
