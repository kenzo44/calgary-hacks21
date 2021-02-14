<template>
  <fieldset class="map-options">
    <legend><i class="fas fa-eye"></i> YYC Watch Tower</legend>
    <label>With Watch Tower, preview crimes that have occured and are occuring in Calgary in realtime.</label><br/><br/>
    <label><input v-model="type" type="radio" id="active" name="type" value="active" /> COVID-19 Cases</label><br />
    <label><input v-model="type" type="radio" id="confirmed" name="type" value="confirmed" /> Crime</label><br />
    <label><input v-model="type" type="radio" id="recovered" name="type" value="recovered" /> Hospitals</label><br />
    <label><input v-model="type" type="radio" id="deaths" name="type" value="deaths" /> Schools</label>
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
  width: 220px;
  top: 120px;
  left: 10px;
  padding: 20px;
  background: rgb(255,255,255,0.8);
  border-radius: 5px;
  font-size: 18px;
  border-radius: 5px;
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
  background: white;
  font-weight: bold;
  padding: 10px 2px;
  border-radius: 10px;
}
</style>
