<template>
<div class="hello">
      <div class="Logo">Breaking Bad Wiki</div>

    <div class="RandomQuotes"  v-for="random in quotes" :key="random.quote_id"> 
         {{random.quote}}
         {{random.author}}
      </div>
</div>


</template>

<script>



export default {

  name: "Main",
 

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
    },
 
}

</script>


