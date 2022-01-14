<template>

  <div class="app">
    <Footer />
    <Main />
    <Search />
  </div>


</template>

<script>
// @ is an alias to /src
import Main from '@/components/Main.vue'
import Search from '@/components/Search.vue'
import Footer from '@/components/Footer.vue'



export default {
  name: 'Home',
  components: {
    Main,
    Search,
    Footer
  }
}
</script>
