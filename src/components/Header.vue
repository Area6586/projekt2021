<template>
  <div class="hello">
    <div class="Logo">Breaking Bad Character Wiki</div>

    <div class="RandomQuotes" v-for="random in quotes" :key="random.quote_id">
      <div class="Quotes">{{ random.quote }}</div>
      <div class="QuoteAuthor">{{ random.author }}</div>
    </div>
    <button class="QuoteBtn" @click="getQuote()">Get another quote!</button>
  </div>
</template>

<script>

export default {

  name: "Header",

  methods: {
    getQuote() {
      try {
        fetch('https://www.breakingbadapi.com/api/quote/random')
          .then((res) => res.json())
          .then((json) => {
            console.log(json);
            this.quotes = json;
          });
      }

      catch (err) {
        console.log(err)
      }
    },
  },

  data() {
    return {
      quotes: [],
      quote: "",
      author: "",
      quote_id: "",
    };
  },

  mounted() {
    try {
      fetch('https://www.breakingbadapi.com/api/quote/random')
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          this.quotes = json;
        });
    }

    catch (err) {
      console.log(err)
    }
  },
}

</script>


