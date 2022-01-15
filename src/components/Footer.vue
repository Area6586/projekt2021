<template>

<div class="detailBackground">
   {{characters}}
  
</div>
   
  
</template>




<script>




export default {
    name: "Footer",
    props: ['name'],
    
    
    data (){
        return {
            characters : [],

        }
    },

    mounted(){
      try{
        fetch('https://breakingbadapi.com/api/death/?'+ this.name)
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
    created() {
    //console.log(this.$route.query);
  }
     // computed: {
      //userId(){
      //return parseInt(this.$route.params.userId)
    //},

  //}
}
</script>