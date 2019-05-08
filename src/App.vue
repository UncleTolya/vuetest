<template>
  <div>
    <h1>Parent: {{ msg }}</h1>
    <h1>Parent: Car: {{ carName }}</h1>
    <app-car :carName="carName"
             :carYear="carYear"
    ></app-car>
  </div>

</template>

<script>
  import Car from './Car.vue'


  export default {
    data () {
      return {
        carName: 'Ford',
        carYear: 2019,
        msg: 'Welkommen'
      }
    },
    components: {
      appCar: Car
    }
  }
</script>

<style>
</style>
