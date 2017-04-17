<script>
    import Navbar from './components/Navbar.vue';
    import FooterBar from './components/FooterBar.vue';
    export default {
    name: "Boilerplate",
        components: {
            Navbar,
            FooterBar
        }
    }
</script>
<template>
    <div>
        <Navbar></Navbar>
        <main>
          <router-view></router-view>
        </main>
        <FooterBar></FooterBar>
    </div>
</template>
<style lang="sass">

</style>