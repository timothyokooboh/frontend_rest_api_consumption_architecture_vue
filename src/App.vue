<template>
  <div>
    <p v-if="loading">loading...</p>
    <p v-if="!loading && error">an error occured</p>
    <ul v-else>
      <li v-for="(country, idx) in countries" :key="idx">{{country.name.common}}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { ref, watchEffect } from "vue";
  import { LIST_COUNTRIES } from './models/CountriesModel';
  import useResource from './composables/useResource';

  const { response, error, loading } = useResource(LIST_COUNTRIES)

  let countries = ref([])

  watchEffect(() => {
    if (response.value) {
      countries.value = response.value.data;
    }
  }) 
</script>

<style scoped>

</style>