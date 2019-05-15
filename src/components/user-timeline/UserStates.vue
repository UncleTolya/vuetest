<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs6>
        <h2>Current state number: {{ currentStateId }}</h2>
        <pre style="font-size: 20px">{{ states[currentStateId] }}</pre>
      </v-flex>
      <v-flex xs6>
        <user-changes
          :user="user"
          :states="states"
          :currentStateId="currentStateId"
        ></user-changes>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import UserChanges from './UserChanges.vue';

  export default {
    name: 'userStates',
    props: {
      states: Array,
      currentStateId: Number,
      user: Object
    },
    components: {
      UserChanges
    },
  }
</script>

<style scoped>
</style>
