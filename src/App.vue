<template>
  <div class="map-wrapper">
      <Map />
      <MapOptions />
    </div>
</template>

<script>
import Map from './components/Map.vue';
import MapOptions from './components/MapOptions.vue'

export default {
  name: 'App',
  components: {
    Map,
    MapOptions,
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

</style>
