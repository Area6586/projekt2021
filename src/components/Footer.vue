<template>



    <div class="character"  v-for="deaths in characters" :key="deaths.deathId">
        
 <!-- {{deaths.death.replace(" ", "+")}} -->
 {{this.name}}

 </div>


</template>




<script>

export default {
    name: "Footer",
    props: ['name'],
    
    
    data (){
        return {
            characters : [],
            death: "",
            cause: "",

        }
    },
    


// Wir Brauchen hier erstmal die character Api. Von der Character Api lesen wir dann den Name aus und dann kann man this.name.replace(" ", "+") machen
//this.name ist das problem, das funktioniert nicht

    mounted(){
      try{
        fetch('https://breakingbadapi.com/api/death?name=Walter+White')
            .then((res)=> res.json())
            .then((json)=> {
                //console.log(typeof(json));
                console.log(this.name)
                this.characters = json;
            });
        }
        catch(err){
        console.log(err)
      }
    },
    
   
}
</script>