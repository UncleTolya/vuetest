<template>
    <div id="app">
      <chart @currentStateIdChanged="currentStateId = $event"></chart>
      <user-states
        :states="user.states"
        :currentStateId="currentStateId"
      ></user-states>
    </div>
</template>

<script>
  import Chart from '../Chart';
  import UserStates from "./UserStates";


  export default {
    name: 'userTL',
    data() {
      return{
        currentStateId: 0
      }
    },
    props: {
      user: Object
    },
    components: {
      UserStates,
      Chart
    },

  }
</script>

<style scoped>
</style>
