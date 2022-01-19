<template>
  <div class="searchField">
    <div id="sort-bar">
      <select name="sortBy" id="select" v-model="sortBy">
        <option value="alaphabetically">Alphabatically</option>
        <option value="cookingTime">CookingTime</option>
      </select>
      <button v-on:click="ascending = !ascending" class="sort-button">
        <i v-if="ascending" class="fa fa-sort-up"></i>
        <i v-else class="fa fa-sort-down"></i>
      </button>
    </div>
    <input
      class="inputField"
      type="text"
      v-model="search"
      placeholder="Find Character"
    />
    <ul class="List">
      <ol
        class="characterList"
        v-for="user in filteredQuery"
        :key="user.char_id"
      >
        <router-link
          :to="{
            name: 'Info',
            params: { userId: user.char_id, name: user.name },
          }"
        >
          <img
            class="searchimg"
            :src="user.img"
            v-bind:img="name"
            alt="Picture"
          />
        </router-link>
        {{
          user.name
        }}
        <h4>Alias "{{ user.nickname }}"</h4>
        <!-- <h4>Date of birth: {{user.birthday}}</h4>
        <h4>End of series: {{user.status}}</h4> -->
      </ol>
    </ul>
  </div>

  <button id="TopBtn" @click="topFunction()">Top</button>
  <button id="BottomBtn" @click="bottomFunction()">Top</button>
</template>

<script>
export default {
  name: "Search",

  data() {
    return {
      search: "",
      list: [],
      ascending: true,
      sortby: 'alphabetically'
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
  mounted() {
    try {
      fetch("https://www.breakingbadapi.com/api/characters/")
        .then((res) => res.json())
        .then((json) => {
          this.list = json;
        });
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
        topFunction() {
         document.documentElement.scrollTop = 0;
        },
        bottomFunction() {
         document.documentElement.scrollTop = 6000;
        }
  },
};
</script>
