<template>

<div class="detailBackground">
     {{characters}}
  <div class= "button">
   <button @click="Randomdeath">random</button>
   {{character}}

  </div>
</div>
   
  
</template>

<script>

export default {
    name: "Footer",
    props : ['name'],
    
    
    data (){
        return {
            death : ""
        }
    },
    methods: {
      Randomdeath(){
         try{
        fetch('https://breakingbadapi.com//api/death?name=' + this.name)
            .then((res)=> res.json())
            .then((json)=> {
                //console.log(typeof(json));
                console.log(this.list)
                this.death = json;
            });
        }
        catch(err){
        console.log(err)
      }

      }
    },
    mounted(){
      
     //return parseInt(this.$route.params)
    },
    created() {
    //console.log(this.$route.query);
  }
     // computed: {
      //userId(){
      //
    //},

  //}
};
</script>