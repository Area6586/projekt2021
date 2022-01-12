<template>
 
<div class="detailBackground">
    <button class="backButton"> &#8249; </button>

    
    <div class="searchFieldDetail">
      <input class="inputFieldDetail" type="text" placeholder=" Find another Character" />
      <button class="inputButton"> Search</button>
    </div>

    <Main :char_id="character.char_id" />
    <div class="characterDetail"  v-for="character in list" :char_id="character.char_id" :key="character.char_id">
       <div class="characterInfo">

                <!-- Character Name: <br> -->
                 {{character.name}} <br>
                 {{character.nickname}} <br> <br>

                 {{character.occupation}} <br> <br>

                 Birthday: <br>
                 {{character.birthday}} <br> <br>

                 Portrayed by: <br>
                {{character.portrayed}} <br> <br>

                appeared in: <br>
                {{character.appearance}} <br> <br>               

                 
                {{character.status}}
            
          
       </div>
       <div class="characterPicture">
          <img :src="character.img" v-bind:img="name" alt="Girl in a jacket" style="width:350px;height:500px;"> 
       </div>


</div>
</div>
   
  
</template>




<script>



export default {
    name: "Details",
    props: ['char_id'],
    
    
    data (){
        return {
            characters : [],
            birthday : "",
            category : "",
            img : [],
            //char_id: this.$route.params.char_id,
            user: null,
        }
    },

    mounted(){
      try{
        fetch('https://www.breakingbadapi.com/api/characters/'+ this.char_id)
            .then((res)=> res.json())
            .then((json)=> {
                console.log(json);
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
