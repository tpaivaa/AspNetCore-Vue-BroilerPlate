<template>
    <nav>
        <div class="nav-wrapper light-blue darken-2">
            <a href="#" class="brand-logo">SaneSoft</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><router-link to="home">Home</router-link></li>
                <li><router-link to="about">About</router-link></li>
                <li><router-link to="apiexample">ApiExample</router-link></li>
                <li><router-link to="inputs">Functionality</router-link></li>
            </ul>
        </div>
    </nav>
</template>
<script>
  export default {
    name: "Navbar"
    }
</script>
<style lang="sass" scoped>
    /* Imports */
    @import "../stylesheets/variables.scss";
    /* Styles */
</style>