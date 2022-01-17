<template>

         
         
    <div class="characterDetail"  v-for="character in characters" :key="character.userId">
      
       <div class="characterInfo">
             <router-link to="/">
            <button class="backButton"> &#8249;</button>
            </router-link>

                <div class="CharacterName"> {{character.name}} </div>
                 <div class="CharacterNickname"> "{{character.nickname}}" </div>
                  <br>
                    <div class="CharacterOccupation"> {{character.occupation.join(", ")}} </div>
                  <br>
                  <div class="CharacterBirthday">  Birthday: <br>{{character.birthday}} </div>
                  <br>
                  <div class="CharacterPortrayed">  Portrayed by: <br> {{character.portrayed}}</div>
                  
                  <div class="CharacterAppearance"> in Season: {{character.appearance.join(", ")}} </div>
                
       </div>
       <div class="characterPicture">
          <img :src="character.img" v-bind:img="name" alt="Girl in a jacket" style="width:400px;height:550px;"> 
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
  

 
}
</script>

<style>

</style>
