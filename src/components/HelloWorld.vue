<template>
  <div class="greeting">
    <p class="greeting">{{ greeting.toLocaleUpperCase() }}</p>
    <span>
      <input type="text" v-model="greeting" />
    </span>
  </div>
  <div class="add-item-list">
    <input v-model="newItem" type= "text" placeholder="add new item"/>
      <button class="btn" v-on:click="saveItem">save</button>
  </div>
  <div>
    <ol>
      <li v-for="item in items" :key="item.message"> {{item.message}}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      greeting: "HeiL",
      newItem: '',
      items: 
      [
        {  message: "140 Paggrty Hats"},
        {  message: "32 board game"},
      ],
      }
    },
  methods: {
    saveItem: function(){
      this.items.push(this.newItem);
      this.newItem = '';
  }
  },
};
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
