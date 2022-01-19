<template>
  <div class="detailBackground">
     <button @click="newRandom()">Random</button>
     {{deaths.death}}
          <div class="death" v-for="(value, key) in deaths" :key="key">

              {{value}}
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
          console.log(typeof(json));
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