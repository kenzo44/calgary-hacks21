<template>
  <fieldset class="map-options">
    <legend><i class="fas fa-eye"></i> YYC Watchtower</legend>
    <label>With Watch Tower, preview crimes that have occurred in Calgary from 2019 until today all in real-time and gain a better understanding of your community!</label><br/><br/>
    <br/>
    <label>YYC Watchtower is powered by Google Cloud.</label><br/><br/><br/>
    <label class="boast"><i class="fas fa-spinner fa-pulse"></i> Loading 46,428 cases</label><br/><br/>
    <label class="date"><i class="far fa-clock"></i> Last updated: {{ timestamp }}</label>

  </fieldset>

</template>

<script>

export default {
  name: 'MapOptions',
  data: () => ({
    type: 'active',
    timestamp: ""
  }),
   created() {
                setInterval(this.getNow, 1000);
            },
            methods: {
                getNow: function() {
                    const today = new Date();
                    const date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
                    const dateTime = date;
                    this.timestamp = dateTime;
                }
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
  background: rgb(255,255,255);
  border-radius: 5px;
  font-size: 18px;
  border-radius: 10px;
}
hr{
  border: 1px solid #333;
}
.date{
  font-size: 15px;
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
  background: rgb(255,255,255);
  font-weight: bold;
  padding: 10px 2px;
  border-radius: 10px;
}
</style>
