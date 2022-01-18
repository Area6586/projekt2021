<template>

  <div class="app">
    <Header />
  <Search />
  <Main />
  

  </div>

</template>

<script>
// @ is an alias to /src
import Main from '@/components/Main.vue'
import Search from '@/components/Search.vue'
import Header from '@/components/Header.vue'





export default {
  name: 'Home',
  components: {
    Main,
    Search,
    Header
  }
}
</script>

