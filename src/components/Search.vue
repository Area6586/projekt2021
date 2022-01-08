<template>
  <div class="search">
    {{ search }}
    <input type="text" v-model="search" placeholder="Name" />
    <ul>
    <li v-for="user in filteredQuery" :key="user.char_id">
      {{ user.name }}
    </li>
    </ul>
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

  mounted()  {
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
