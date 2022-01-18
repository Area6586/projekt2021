<template>
  <div class="detailBackground">
    <button class="backButton">&#8249;</button>
    <div
      class="characterDetail"
      v-for="character in characters"
      :key="character.name"
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

  </div>



</template>

<script>



export default {
  name: "Info",
  props: ["userId"],
  data() {
    return {
      characters: [],
      birthday: "",
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
          //console.log(json)
          this.characters = json;
        });
    } catch (err) {
      console.log(err);
    }
  },

};
</script>

<style></style>
