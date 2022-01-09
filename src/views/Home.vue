<template>
  <div class="app">
    <Main />
    <Search />
  </div>
</template>

<script>
// @ is an alias to /src
import Main from '@/components/Main.vue'
import Search from '@/components/Search.vue'


export default {
  name: 'About',
  components: {
    Main,
    Search
  }
}
</script>
