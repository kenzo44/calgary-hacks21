<template>
  <fieldset class="map-options">
    <legend><i class="fas fa-eye"></i> YYC Watchtower</legend>
    <label>With Watch Tower, preview crimes that have occurred in Calgary from 2019 until today all in real-time and gain a better understanding of your community!</label><br/><br/>
    <i class="fas fa-search-minus"></i> to see crime hotspots in a cluster<br/><br/><i class="fas fa-search-plus"></i> to break down a cluster and access information on each case by selecting it.<br/>
    <div class="lengendary"><br/>
      Cluster Legend
      <ul>
        <li><i class="us fas fa-thumbtack"></i> 1-9 Cases</li>
        <li><i class="s fas fa-thumbtack"></i> 10-99 Cases</li>
        <li><i class="m fas fa-thumbtack"></i> 100-999 Cases</li>
        <li><i class="h fas fa-thumbtack"></i> 1000+ Cases</li>
        </ul>
    </div><br/>
    <label class="boast"><i class="fas fa-spinner fa-pulse"></i> Loading 46,428 cases</label><br/><br/>
    <label class="date"><i class="far fa-clock"></i> Last updated: {{ timestamp }}</label><br/>

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
.us{
  color: #008CFF;
}
.s{
color:#ffbf2b;
}
.m{
color: #ff0a0f;
}
.h{
color: #ff0de9;
}
hr{
  border: 1px solid #333;
}
.date{
  font-size: 15px;
}
ul{
  list-style-type: none;
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
