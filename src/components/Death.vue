<template>
  
 
  <div class="DeathHeader">Get Random Death</div> 
     <div class="randomDeathGrid">
        <div class="Deathinfo">
          
              <div class="deathName"> {{deaths.death}} </div>
              <div class="deathNickname"> "{{deaths.nickname}}"</div>
              <br> 
            
              <div class="deathCause"> <h4> Cause of Death: </h4>
               {{deaths.cause}}
              </div>
             
              <div class="deathResponsible">  by {{deaths.responsible}} </div>
              <br>
              <div class="deathLastWords"> <h4> Last Words: </h4>
                {{deaths.last_words}}
              </div>
              <br>
        </div>

              <div class="deathPicture">
                <img :src="deaths.img"  v-bind:img="death" alt="Picture" style="width: 175px; height: 250px" />
              </div>
              <button class="DeathBTN" @click="newRandom()">Random</button>
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

  },

   mounted() {
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
};
</script>


<style scoped>



</style>