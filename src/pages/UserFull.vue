<template>
  <v-app>
    <h1 class="text-xl-center">There are {{getPrints.length}} user's fingerprints</h1>
    <div id="app" class="form-group">
      <v-card-text>
        <v-slider
          v-model="currentFingerPrint"
          min="0"
          :max="getPrints.length - 1"
          step="1"
          ticks="always"
          tick-size="1"
        ></v-slider>
      </v-card-text>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <h2>Current TimeStamp</h2>
          <pre style="font-size: 20px">{{ getPrints[currentFingerPrint] }}</pre>
        </div>
        <div class="col-6">
          <user-changes :pos="currentFingerPrint" :finger-prints="getPrints"></user-changes>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
  import UserListMixin from '../mixins/mix_usersList.js';
  import UserChanges from '../pages/UserChanges.vue';

  export default {
    props: ['id'],
    mixins: [UserListMixin],
    data() {
      return {
        fingerPrints: null,
        currentFingerPrint: 0,
      }
    },
    components: {
      UserChanges
    },
    computed: {
      getPrints() {
        let prints = [];
        for (const user of this.users) {
          if (user.userId == this.id) {
            prints = user.fingerPrints;
            break;
          }
        }
        return prints;
      }
    },
  }
</script>

<style scoped>
</style>
