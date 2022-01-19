<template>


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


 
  
</template>

<script>
export default {
  name: "Search",

  data() {
    return {
      search: "",
      list: [],
    };
  },

  computed: {
    //von youtube videos
    filteredQuery() {
      const query = this.search.toLowerCase();
      if (this.search === "") {
        return this.list;
      }
      return this.list.filter((item) => {
        return Object.values(item).some((word) =>
          String(word).toLowerCase().includes(query)
        );
      });
    },
  },
  mounted() {
    try {
      fetch("https://www.breakingbadapi.com/api/characters/")
        .then((res) => res.json())
        .then((json) => {
          this.list = json;
          console.log(typeof list);
        });
    } catch (err) {
      console.log(err);
    }
  },
  

       methods: {
        topFunction() {
         document.documentElement.scrollTop = 0;
        }
        
  }

}
</script>
