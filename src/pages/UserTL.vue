<template>
    <div id="app">
      <chart></chart>
    </div>
</template>

<script>
  import Chart from '../components/Chart';


  export default {
    name: 'userTL',
    props: ['id'],
    components: {
      Chart
    },

  }
</script>

<style scoped>
</style>
