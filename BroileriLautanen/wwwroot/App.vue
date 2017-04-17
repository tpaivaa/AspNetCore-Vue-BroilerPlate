<template>
    <div>
        <Navbar></Navbar>
        <main>
          <router-view></router-view>
        </main>
        <FooterBar></FooterBar>
    </div>
</template>
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
<style lang="sass" scoped>

</style>