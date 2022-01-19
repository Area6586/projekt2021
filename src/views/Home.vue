<template>

  <div class="app">
    <Header />
  <Search />
  <Main />
  <Death />
  

  </div>

</template>

<script>
// @ is an alias to /src
import Main from '@/components/Main.vue'
import Search from '@/components/Search.vue'
import Header from '@/components/Header.vue'
import Death from '@/components/Death.vue'





export default {
  name: 'Home',
  components: {
    Main,
    Search,
    Header,
    Death
  }
}
</script>

