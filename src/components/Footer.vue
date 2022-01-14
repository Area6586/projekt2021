<template>

<div class="detailBackground">
   {{characters}}
  
</div>
   
  
</template>




<script>




export default {
    name: "Footer",

    
    
    data (){
        return {
            characters : [],

        }
    },

    mounted(){
      try{
        fetch('https://breakingbadapi.com/api/death?name=Walter+White')
            .then((res)=> res.json())
            .then((json)=> {
                //console.log(typeof(json));
                console.log(json)
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