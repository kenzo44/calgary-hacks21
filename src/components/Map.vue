<template>
  <div class="Map"/>
</template>

<script>
import MarkerClusterer from '@googlemaps/markerclustererplus';

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

const locations = [];

async function getData() {
  var query = Firebase.database().ref("features");
  await query.once("value") // << Await this call here
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childLat = childSnapshot.child("properties/lat").val();
        var childLong = childSnapshot.child("properties/long").val();
        var childID = childSnapshot.child("properties/id").val();
        var pos = {
          position: {
            lat: parseFloat(childLat),
            lng: parseFloat(childLong),
          },
          id: String(childID),
        }
        locations.push(pos);
      });
      console.log(locations.length)
  });
}

console.log(locations.length);

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
      const map = new google.maps.Map(this.$el, {
        styles: [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#263c3f" }],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{ color: "#6b9a76" }],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#38414e" }],
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#212a37" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9ca5b3" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#746855" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#1f2835" }],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [{ color: "#f3d19c" }],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#2f3948" }],
        },
        {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#17263c" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#515c6d" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#17263c" }],
        },
      ],
    });

      geocoder.geocode({ address: 'Calgary' }, (results, status) => {
        if (status !== 'OK' || !results[0]) {
          throw new Error(status);
        }

        map.setCenter(results[0].geometry.location);
        map.fitBounds(results[0].geometry.viewport);
      });

      const infowindow = new google.maps.InfoWindow({
        title: '',
      });

      const markerClickHandler = (marker) => {
        infowindow.setContent(marker.title);
        infowindow.open(map, marker);
      };

      const markers = locations
        .map((location) => {
            const marker = new google.maps.Marker({
              ...location,
              map,
              title: location.id,
            });

            //marker.setIcon('../assets/thieficon.png');
            marker.addListener('click', () => markerClickHandler(marker));

            return marker;
          });

        new MarkerClusterer(map, markers, {
          imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
          maxZoom: 12,
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
