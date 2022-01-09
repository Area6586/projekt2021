<template>
  <div class="app">
  <!--  <Main />
    <Footer />
   <Search />-->
    <Details />
  </div>
</template>

<script>
// @ is an alias to /src
//import Main from '@/components/Main.vue'
//import Search from '@/components/Search.vue'
//import Footer from '@/components/Footer.vue'
import Details from '@/components/Details.vue'


export default {
  name: 'Home',
  components: {
    //Main,
    //Search,
    //Footer,
    Details
  }
}
</script>
