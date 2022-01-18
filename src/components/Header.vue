<template>
<div class="hello">
      <div class="Logo">Breaking Bad Wiki</div>


    <div class="RandomQuotes" v-for="random in quotes" :key="random.quote_id"> 
         <div class="Quotes" >{{random.quote}}</div>
         <div class="QuoteAuthor">{{random.author}} </div>
         
      </div>
      <button class="QuoteBtn" @click="getQuote()">Get another quote!</button> 
</div>


</template>

<script>



export default {

  name: "Header",

  methods: {
        getQuote() {
         try{
        fetch('https://www.breakingbadapi.com/api/quote/random')
            .then((res)=> res.json())
            .then((json)=> {
                console.log(json);
                this.quotes = json;
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
    }
        },
        
  
 

data(){
    return {
        quotes: [],
        quote: "",
        author:"",
        quote_id: "",
    };
  },


mounted(){
      try{
        fetch('https://www.breakingbadapi.com/api/quote/random')
            .then((res)=> res.json())
            .then((json)=> {
                console.log(json);
                this.quotes = json;
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
    }
 
}

</script>


