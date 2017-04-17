<script>
  import Navbar from './components/Navbar.vue'

  export default {
    name: "Boilerplate",
    components: {
      Navbar
    }
  }
</script>

<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>