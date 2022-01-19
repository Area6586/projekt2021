<template>

         <div class="detailBackground">
    
  
    <div class="characterDetail"  v-for="character in characters" :key="character.userId">
      
       <div class="characterInfo">
             <router-link to="/">
            <button class="backButton"> &#8249;</button>
            </router-link>

                <div class="CharacterName"> {{character.name}} </div>

                 <div class="CharacterNickname"> Alias "{{character.nickname}}" </div>
                  <br>
                  <br>
                  <div class="CharacterOccupation"> <h6> Profession: </h6>{{character.occupation.join(", ")}} </div>
                  <br>
                  <div class="CharacterBirthday"> <h6> Birthday:</h6>{{character.birthday}} </div>
                  <br>
                  <div class="CharacterPortrayed"> <h6> Portrayed by:</h6>{{character.portrayed}}  in Season: {{character.appearance.join(", ")}} </div>

                  <br>
                     <h6> Dead or Alive?</h6> 
                  <button id="deadOrAliveBtn" @click="showContent()"> find out! </button>
                  <div id="CharacterStatus">{{character.status}}</div>
                  

                
       </div>
       <div class="characterPicture">
          <img :src="character.img" v-bind:img="name" alt="Girl in a jacket" style="width:400px;height:550px;"> 
       </div>
    


</div>
 
  </div>

  
</template>

<script>



export default {
    name: "Info",
    props: ['userId'],
    query: ['name'],
   

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

    methods: {
      showContent() {
      document.getElementById("CharacterStatus").style.display = 'inline-block';
      document.getElementById("deadOrAliveBtn").style.display = 'none';
}
    }
  

 
}
</script>

<style>

</style>
