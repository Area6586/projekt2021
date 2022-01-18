<template>
  <div class="detailBackground">
     <button @click="newRandom()">Random</button>
          <div class="death" v-for="death in deaths" :key="death.death">

              {{death}}
           </div>
      </div>
</template>

<script>
export default {
  name: "Footer",                     
  data() {
    return {
      deaths: [],
      death: "",
      death_id: "",
    };
  },
  methods: {
    newRandom() {
    try {
      fetch("https://breakingbadapi.com/api/random-death")
        .then((res) => res.json())
        .then((json) => {
          //console.log(typeof(json));
          console.log(json);
          this.deaths = json;
        });
    } catch (err) {
      console.log(err);
    }
  },

  }
};
</script>


<style scoped>



</style>