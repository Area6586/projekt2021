<template>
  <div class="detailBackground">
    <button class="backButton">&#8249;</button>
    <div class="searchFieldDetail">
    </div>
    <div
      class="characterDetail"
      v-for="character in characters"
      :key="character.name"
      :name="character.name"
    >
    <div class="characterInfo" >
        <!-- Character Name: <br> -->
        {{ character.name }} <br />
        
        {{ character.nickname }} <br />
        <br />

        {{ character.occupation }} <br />
        <br />

        Birthday: <br />
        {{ character.birthday }} <br />
        <br />

        Portrayed by: <br />
        {{ character.portrayed }} <br />
        <br />

        appeared in: <br />
        {{ character.appearance }} <br />
        <br />

        {{ character.status }}
      </div>
      <div class="characterPicture">
        <img
          :src="character.img"
          v-bind:img="name"
          alt="Girl in a jacket"
          style="width: 350px; height: 500px"
        />
      </div>
    </div>
    <Footer />
  </div>



</template>

<script>

import Footer from '@/components/Footer.vue'

export default {
  name: "Info",
  props: ["userId"],
  components : {
    Footer
  },

  data() {
    return {
      characters: [],
      birthday: "",
      category: "test",
      img: [],
      char_id: "",
      user: null,
    };
  },

  mounted() {
    try {
      fetch("https://www.breakingbadapi.com/api/characters/" + this.userId)
        .then((res) => res.json())
        .then((json) => {
          //console.log(typeof(json));
          console.log(json)
          this.characters = json;
        });
    } catch (err) {
      console.log(err);
    }
  },
  // computed: {
  //userId(){
  //return parseInt(this.$route.params.userId)
  //},

  //}
};
</script>

<style></style>
