<template>
<div class="hello">
      <div class="Logo">Breaking Bad Wiki</div>
  <!-- <button @click="info()"> showCharacter </button>
    <div v-for="data in list"  v-bind:key="data.char_id">
      <div>
        <img :src="data.img" v-bind:img="name">
        <h1>{{data.name}}</h1>
      <div>
        <h2>{{data.name + ' ' + data.nickname}}</h2>
        <h5>{{data.birthday}}</h5>
      </div>
     </div>
    </div> -->
 <h1>{{list}}</h1>
</div>


</template>

<script>



export default {

  name: "Main",
    data(){
    return {
        list: [],

    };
  },
    mounted(){
      try{
        fetch('https://www.breakingbadapi.com/api/characters/')
            .then((res)=> res.json())
            .then((json)=> {
                this.list = json;
                console.log(typeof(list))
            });
      }
      catch(err){
        console.log(err)
      }
    },




}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
