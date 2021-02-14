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
import Firebase from 'firebase'
let config={
  apiKey: "AIzaSyDtCUmTAoiHi6CAWHV4aNy6T8JT6KP1l50",
    authDomain: "calgarycrime-9c9d0.firebaseapp.com",
    databaseURL: "https://calgarycrime-9c9d0-default-rtdb.firebaseio.com",
    projectId: "calgarycrime-9c9d0",
    storageBucket: "calgarycrime-9c9d0.appspot.com",
    messagingSenderId: "845317394150",
    appId: "1:845317394150:web:6f25e93fa86a69ef863527"
}
let app = Firebase.initializeApp(config)
let db = app.database()
let featuresRef = db.ref('features')

var ref = Firebase.database().ref("features/9099/properties");

var ref1 = Firebase.database().ref("features");
ref1.once("value")
  .then(function(snapshot) {
    var numChild = snapshot.numChildren();
    console.log(numChild);
});


ref.once("value")
  .then(function(snapshot) {
    var id = snapshot.child("id").val();
    var lat = snapshot.child("lat").val();
    var long = snapshot.child("long").val();
    console.log(id);
    console.log(lat);
    console.log(long);
  });

export default {
  name: 'MapOptions',
  firebase:{
    features: featuresRef
  },
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
