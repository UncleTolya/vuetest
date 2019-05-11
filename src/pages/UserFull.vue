<template>
  <div>
    <h1>There are {{getPrints.length}} user's fingerprints</h1>
    <pre v-for="print in getPrints">
      {{ print }}
      <hr>
    </pre>
  </div>
</template>

<script>
  import UserListMixin from '../mixins/mix_usersList.js'

  export default {
    props: ['id'],
    mixins: [UserListMixin],
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
