<template>
 
<div class="detailBackground">
    <button class="backButton"> &#8249; </button>

    
    <div class="searchFieldDetail">
      <input class="inputFieldDetail" type="text" placeholder=" Find another Character" />
      <button class="inputButton"> Search</button>
    </div>


    <div class="characterDetail">
       <div class="characterInfo">

         This is a lot of Info
       </div>
       <div class="characterPicture">
          <img src="../assets/cast_bb_700x1000_mike-ehrmantraut-lg.jpg" alt="Girl in a jacket" style="width:350px;height:500px;"> 
       </div>


</div>



  

</div>
   
</template>



<script>


//import axios from 'axios';

export default {

  name: "Search",

  data(){
    return {
        search: "",
        list: []
    };
  },
/*
  mounted(){
    fetch('https://www.breakingbadapi.com/api/characters/')
    .then(res=> res.json())
    .then(data => console.log(data))
  },
*/
 computed: {
    filteredQuery() {
        const query = this.search.toLowerCase();
        if(this.search  === ""){
            return this.list;
        }
        console.log(query)
        return this.list.filter((item) => {
            //return console.log(this.list);
            return Object.values(item).some((word)=> 
            String(word).toLowerCase().includes(query)
        );
        });
      },
    },

  mounted(){
      try{
        fetch('https://www.breakingbadapi.com/api/characters/')
            .then((res)=> res.json())
            .then((json)=> {
                console.log(json);
                this.list = json;
            });
        /*
        const character  = await axios.get('https://www.breakingbadapi.com/api/characters/' , config);
        //console.log(typeof(character.data));
        this.list = character.data;
        //console.log(typeof(this.list));
      */}
      catch(err){
        console.log(err)
      }
    },

}
</script>