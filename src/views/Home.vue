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
import Header from '@/components/Header.vue'
import Search from '@/components/Search.vue'
import Death from '@/components/Death.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Search,
    Death
  }
}
</script>

