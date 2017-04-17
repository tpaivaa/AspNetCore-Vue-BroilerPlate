<script>
  export default {
    name: "Navbar"
    }
</script>
<template>
    <div class="santeri-example">
        <div>
            <div>
                <ul>
                    <li>ASP.NET Core + Vue.Js</li>
                    <li><router-link to="home">Home</router-link></li>
                    <li><router-link to="about">About</router-link></li>
                    <li><router-link to="apiexample">API</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="sass">
    /* Imports */
    @import "../stylesheets/variables.scss";
    /* Styles */
    .santeri-example{
        font-size:2em;
        color:$black;
    }
</style>