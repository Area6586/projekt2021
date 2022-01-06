
<template>
<div class="home">
  <div :style="image" class="image">
      <section class="head">
        <div class="Logo">Breaking Bad Wiki</div>
        <div class="input">
          <input class="inputField" type="text" name="input" @keyup.enter="test2" />
          <button class="inputButton" @click="loadapi()">Find Character</button>
          </div>
      </section>

      <section class="randomCharacters">
        <div class="container">
          <div class="character1">
           <img src="https://i.redd.it/hcprm17ktpu21.jpg" alt="DogPicture" width="280px" height="400px">
          </div>
          <div class="character2">
           <img src="https://i.redd.it/hcprm17ktpu21.jpg" alt="DogPicture" width="280px" height="400px">
          </div>
          <div class="character3">
           <img src="https://i.redd.it/hcprm17ktpu21.jpg" alt="DogPicture" width="280px" height="400px">
          </div>
          <div class="character4">
            <img src="https://i.redd.it/hcprm17ktpu21.jpg" alt="DogPicture" width="280px" height="400px">
          </div>
          <div class="character5">
            <img src="https://i.redd.it/hcprm17ktpu21.jpg" alt="DogPicture" width="280px" height="400px">
          </div>
          <div class="character6">
            <img src="https://i.redd.it/hcprm17ktpu21.jpg" alt="DogPicture" width="280px" height="400px">
          </div>
          <div class="character7">
            <img src="https://i.redd.it/hcprm17ktpu21.jpg" alt="DogPicture" width="280px" height="400px">
          </div>
          <div class="character8">
            <img src="https://i.redd.it/hcprm17ktpu21.jpg" alt="DogPicture" width="280px" height="400px">
          </div>
        </div>
      </section>

</div>
</div>
    
  
</template>

<script>
export default {
  name: 'Home',
  components: {

  },


  data: () => ({
    image: { backgroundImage: "url(https://www.teahub.io/photos/full/72-721277_breaking-bad-4k-hd-desktop-wallpaper-for..jpg)" }

  }),


  methods: {
    loadapi() {
      console.log("button clicked");

    }
  }
}

</script>

