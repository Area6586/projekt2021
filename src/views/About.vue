
<template>

  <div class="app">
    <Details />
    <Footer />
  
  </div>
</template>


<script>
// @ is an alias to /src
import Details from '@/components/Details.vue'
import Footer from '@/components/Footer.vue'



export default {
  name: 'About',
  components: {
    Details,
    Footer
  }
}
</script>

