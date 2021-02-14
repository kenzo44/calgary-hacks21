<template>
  <fieldset class="map-options">
    <legend><i class="fas fa-eye"></i> YYC Watchtower</legend>
    <label>With Watch Tower, preview crimes that have occured and are occuring in Calgary all in realtime and gain a better understanding of your community!</label><br/><br/>
    <br/>
    <label>YYC Watchtower is powered by Google Cloud.</label>
  </fieldset>

</template>

<script>

export default {
  name: 'MapOptions',
  data: () => ({
    type: 'active'
  }),
  watch: {

  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
.map-options {
  border: none;
  font-family: 'Roboto', sans-serif;
  position: fixed;
  width: 240px;
  top: 120px;
  left: 10px;
  padding: 20px;
  background: rgb(255,255,255,0.8);
  border-radius: 5px;
  font-size: 18px;
  border-radius: 5px;
  box-shadow: 4px 7px 8px #888888;
}
hr{
  border: 1px solid #333;
}
legend{
  font-size: 23px;
  width: 100%;
  text-align: center;
}
input {
  margin-bottom: 10px;
}
.map-options legend {
  background: rgb(255,255,255,0.8);
  font-weight: bold;
  padding: 10px 2px;
  border-radius: 10px;
}
</style>
