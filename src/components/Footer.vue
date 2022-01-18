<template>
  <div class="detailBackground">

      <div class="character" v-for="name in name" :key="name.name">
          <div class="death" v-for="death in deaths" :key="death.death">
           
           {{name.name}} {{death.death}}
           </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: ['name'],                        
  data() {
    return {
      deaths: [],
      death: "",
      death_id: "",
    };
  },
  mounted() {
    try {
      fetch("https://breakingbadapi.com/api/random-death")
        .then((res) => res.json())
        .then((json) => {
          //console.log(typeof(json));
          console.log(json);
          console.log(this.characters)
          this.deaths = json;
        });
    } catch (err) {
      console.log(err);
    }
  },
  methods :{
    match(){

    }
  }
};
</script>


<style scoped>



</style>