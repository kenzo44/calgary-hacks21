<template>
  <div class="Map"/>
</template>

<script>
import MarkerClusterer from '@google/markerclusterer';

import gmapsInit from '../utils/gmaps';

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

console.log(featuresRef);


var ref = Firebase.database().ref("features/9099/properties");

const locations = [];

async function getData() {
  var query = Firebase.database().ref("features");
  await query.once("value") // << Await this call here
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childLat = childSnapshot.child("properties/lat").val();
        var childLong = childSnapshot.child("properties/long").val();
        var pos = {
          position: {
            lat: parseFloat(childLat),
            lng: parseFloat(childLong),
          },
        }
        locations.push(pos);
      });
      console.log(locations.length)
  });
}

console.log(locations.length);

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
  name: 'Map',
  firebase: {
    features: featuresRef
  },
  async mounted() {
    try {
      const google = await gmapsInit();
      await getData();
      console.log(locations[0]);
      const geocoder = new google.maps.Geocoder();
      const map = new google.maps.Map(this.$el);

      geocoder.geocode({ address: 'Calgary' }, (results, status) => {
        if (status !== 'OK' || !results[0]) {
          throw new Error(status);
        }

        map.setCenter(results[0].geometry.location);
        map.fitBounds(results[0].geometry.viewport);
      });

      const markerClickHandler = (marker) => {
        map.setZoom(3);
        map.setCenter(marker.getPosition());
      };

      const markers = locations
        .map((location) => {
            const marker = new google.maps.Marker({ ...location, map });
            marker.setIcon();
            marker.addListener('click', () => markerClickHandler(marker));

            return marker;
          });

        new MarkerClusterer(map, markers, {
          imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
          });

        } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

.Map {
  width: 100vw;
  height: 100vh;
}
</style>
