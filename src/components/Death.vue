<template>
  
  <div class="DeathHeader">Get Random Death</div> 
  <button class="DeathBTN" @click="newRandom(), showDeathContent()">get random death</button>
     <div id="randomDeathGrid">
       
        <div class="deathInfo">
              <div class="deathName"> {{deaths.death}} </div>
              <div class="deathNickname"> "{{deaths.nickname}}"</div>
              <br> 
            
              <div class="deathCause"> <h4> Cause of Death: </h4>
               {{deaths.cause}}
              </div>
             
              <div class="deathResponsible">  By {{deaths.responsible}} </div>
              <br>
              <div class="deathLastWords"> <h4> Last Words: </h4>
                {{deaths.last_words}}
              </div>
              <br>
        </div>
              <div class="deathPicture">
                <img :src="deaths.img"  v-bind:img="death" alt="Picture" style="width: 175px; height: 250px" />
              </div>
              
      </div>
      

      
</template>

<script>
export default {
  name: "Death",                     
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
  
  showDeathContent() {
      document.getElementById("randomDeathGrid").style.display = 'grid';
      document.documentElement.scrollTop = document.body.scrollHeight;
  }
  },

};
</script>
