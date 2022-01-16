<template>

<div class="detailBackground">
     {{category}}
  <div class= "button">
   <button @click="Randomdeath">random</button>
   {{test}}

  </div>
</div>
   
  
</template>




<script>



 
export default {
    name: "Footer",
    props :{
      category : String
    },
    
    
    data (){
        return {
            //characters : [],
            death : ""
        }
    },
    methods: {
      Randomdeath(){
         try{
        fetch('https://breakingbadapi.com/api/deaths?'+ this.test)
            .then((res)=> res.json())
            .then((json)=> {
                //console.log(typeof(json));
                console.log(this.test)
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