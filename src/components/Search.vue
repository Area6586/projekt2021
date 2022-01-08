<template>
  <div class="search">
    <button @click="info()" >search </button>
        <h1>This is an about page</h1>
        {{list.name}}
        <input type="text" v-model="searchQuery" placeholder="Name">
        <div v-for="r in resultQuery" :key="r.name">{{r.name}}</div>
  </div>
</template>


<script>


import axios from 'axios';

export default {

  name: "Search",
  data(){
    return {
        searchQuery: "",
        name: "",
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
    resultQuery() {
        return this.list.filter(() => {
            //return console.log(this.list);
            return this.list.name.match(this.searchQuery)
        })
      }
    },

  methods: {
    async info(){
      let config ={ 
        headers : {
          'Accept': 'application/json'
        }
      }
      try{
        const character  = await axios.get('https://www.breakingbadapi.com/api/characters/' , config);
        //console.log((character.data));
        this.list = character.data;
      
      }
      catch(err){
        console.log(err)
      }
    },
  }
}

</script>
