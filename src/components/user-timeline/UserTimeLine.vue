<template>
    <div id="app">
      <chart
        @currentStateIdChanged="currentStateId = $event"
        :states="user.states"
      ></chart>
      <user-states
        :user="user"
        :states="user.states"
        :currentStateId="currentStateId"
      ></user-states>
    </div>
</template>

<script>
  import Chart from '../Chart';
  import UserStates from "./UserStates";

  export default {
    name: 'userStatesTimeLine',
    data() {
      return{
        currentStateId: 1
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
