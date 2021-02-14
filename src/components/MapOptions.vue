<template>
  <fieldset class="map-options">
    <legend>OneMap</legend>
    <label>Filter Options</label><br/><hr>
    <label><input v-model="type" type="radio" id="active" name="type" value="active" /> COVID-19 Cases</label><br />
    <label><input v-model="type" type="radio" id="confirmed" name="type" value="confirmed" /> Crime</label><br />
    <label><input v-model="type" type="radio" id="recovered" name="type" value="recovered" /> Hospitals</label><br />
    <label><input v-model="type" type="radio" id="deaths" name="type" value="deaths" /> Schools</label>
 <table>
    <thead>
      <tr><th>title</th></tr>
      </thead>
    <tbody>
      <tr v-for="feature in features" v-bind:key="feature">
       <td>
         {{feature.properties.date}}
         </td>
        </tr>
    </tbody>
    </table>
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
  width: 180px;
  top: 120px;
  left: 10px;
  padding: 20px;
  background: white;
  border-radius: 5px;
  font-size: large;
}
legend{
  font-size: 18px;
}
input {
  margin-bottom: 10px;
}
.map-options legend {
  background: white;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 10px;
}
</style>
