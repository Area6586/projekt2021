<template>
<body>
  <div class="searchField">
    <input class="inputField" type="text" v-model="search" placeholder="Find Character" />
    <!-- <button class="inputButton" @click="loadapi()">Find Character</button> -->
    

     <button id="TopBtn" @click="topFunction()">Top</button>

    <ul class="List">
    <ol class="characterList" v-for="user in filteredQuery" :key="user.char_id ">
      <router-link :to="{ name: 'Info', params: {userId: user.char_id, name : user.name }}">
      <img class="searchimg" :src="user.img" v-bind:img="name" alt="Picture">
      </router-link>
      <h1>{{user.name}}</h1>
        <h2>Nickname: <br>{{user.nickname}}</h2>
        <!-- <h4>Date of birth: {{user.birthday}}</h4>
        <h4>End of series: {{user.status}}</h4> -->
        
    </ol>
    </ul>
    </div>
    </body>

 
  
  <!-- <section class="randomCharacters">
        <div class="container">
          <div class="character1">
           <img src="https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg" alt="DogPicture" width="280px" height="400px">
          </div>
          <div class="character2">
           <img src="https://i.redd.it/hcprm17ktpu21.jpg" alt="DogPicture" width="280px" height="400px">
          </div>
          </div>
          </section> -->
</template>

<script>


//import axios from 'axios';


export default {

  name: "Search",


  data(){
    return {
        search: "",
        list: [],

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
        //console.log(query)
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
                //console.log(json);
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

       methods: {
        topFunction() {
         document.documentElement.scrollTop = 0;
        }
        
  }

}
</script>
