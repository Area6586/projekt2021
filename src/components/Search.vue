<template>
<div class="lds-dual-ring" v-if="loading"></div>
  <div class="searchField">
    <button id="BottomBtn" @click="bottomFunction()">Death!</button>
    <input class="inputField" type="text" v-model="search" placeholder="Find Character" />

    <ul class="List">
    <ol class="characterList" v-for="user in filteredQuery" :key="user.char_id ">
      <router-link :to="{ name: 'Info', params: {userId: user.char_id, name : user.name }}">
      <img class="searchimg" :src="user.img" v-bind:img="name" alt="Picture">
      </router-link>
      {{user.name}}
        <h5>"{{user.nickname}}"</h5>        
    </ol>
    </ul>
    </div>

    <button id="TopBtn" @click="topFunction()">Top</button>

 
  
</template>

<script>
export default {
  name: "Search",

  data() {
    return {
      search: "",
      list: [],
      loading: false,
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
    this.loading = true;
    try {
      fetch("https://www.breakingbadapi.com/api/characters/")
        .then((res) => res.json())
        .then((json) => {
          this.list = json;
          console.log(typeof list);
          this.loading = false;
        });
    } catch (err) {
      console.log(err);
      this.loading = true;
    }
  },
    methods: {
        topFunction() {
         document.documentElement.scrollTop = 0;
        },   
        bottomFunction() {
         document.documentElement.scrollTop = document.body.scrollHeight;
        }

        
                
  }

}
</script>
