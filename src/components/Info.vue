<template>

<div class="detailBackground">
    
     <router-link to="/">
     <button class="backButton"> &#8249;</button>
     </router-link>
      
   
    <div class="searchFieldDetail">
      <input class="inputFieldDetail" type="text" placeholder=" Find another Character" />
      <button class="inputButton"> Search</button>
    </div>

    <!-- Das Search Feld funktioniert noch nicht. DAs muss man auch noch machen. Wir brauchen eine Auto verfolständigung oder ein Dropdown menü,
    damit man nur den richtigen namen eingeben kann -->

    <div class="characterDetail"  v-for="character in characters" :key="character.userId">
       <div class="characterInfo">

                <div class="CharacterName"> {{character.name}} </div>
                 <div class="CharacterNickname"> {{character.nickname}} </div>
                  <br>
                    <div class="CharacterOccupation" v-for="job in character.occupation" :key="job">
                      {{job}}<span v-if="job != (character.occupation.length)">, &nbsp;</span> 
                      </div>
                  <br>
                  <div class="CharacterBirthday">  Birthday: <br>{{character.birthday}} </div>
                  <br>
                  <div class="CharacterPortrayed">  Portrayed by: <br> {{character.portrayed}}</div>
                  <br>
                  <div class="CharacterAppearance">  Appeared in Seasons: <br> 
                  <div class="CharacterAppearance" v-for="seasons in character.appearance" :key="seasons"> 
                    {{seasons}}<span v-if="seasons != (character.appearance.length)">, &nbsp;</span>
                    </div>
        
                   
                  </div>
                  <br>
                

             
                 
               
            
          
       </div>
       <div class="characterPicture">
          <img :src="character.img" v-bind:img="name" alt="Girl in a jacket" style="width:350px;height:500px;"> 
       </div>
    


</div>
 

</div>

<Footer />
  
</template>




<script>

import Footer from '@/components/Footer.vue'

export default {
    name: "Info",
    props: ['userId'],
    query: ['name'],
    components : {
      Footer
    },
    
    data (){
        return {
            characters : [],
            birthday : "",
            category : "",
            img : [],
            char_id: '',
            appearance: [],
            occupation: [],
            user: null,
        }
    },

    mounted(){
      try{
        fetch('https://www.breakingbadapi.com/api/characters/' + this.userId)
            .then((res)=> res.json())
            .then((json)=> {
                //console.log(typeof(json));
                //console.log(json)
                this.characters = json;
            });
        }
        catch(err){
        console.log(err)
      }
    },
     // computed: {
      //userId(){
      //return parseInt(this.$route.params.userId)
    //},

  //}
}
</script>

<style>

</style>
