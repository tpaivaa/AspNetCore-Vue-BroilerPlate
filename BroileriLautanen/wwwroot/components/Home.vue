<script>
  export default {
    }
</script>
<template>
    <div id="home-container">
        <div class="container">
            <div class="home-header light-blue-text text-darken-3">
                Boilerplate.
            </div>
            <div class="row">
                <div class="col s4">
                    <div class="column-header">
                        ASP.NET Core
                    </div>
                    <div class="column-text">
                        <p>This boilerplate uses the unbelieveable features of asp.net core for backend purposes.</p>
                    </div>
                </div>
                <div class="col s4">
                    <div class="column-header">
                        Vue.js
                    </div>
                    <div class="column-text">
                        <p>
                            Vue.js is the chosen one. Because the single file components are so awesome,
                            so awesome that awesome is not enough.
                        </p>
                    </div>
                </div>
                <div class="col s4">
                    <div class="column-header">
                        Gulp + Webpack = LOVE
                    </div>
                    <div class="column-text">
                        <p>God damn this things are hard to configure. Used two days and still I don't understand anything.</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="home-banner">
        </div>
        <div class="container">
            <div class="row">
                <div class="col s12">
                    <div class="home-header light-blue-text text-darken-3">
                        Visual Studio 2017.
                    </div>
                </div>
                <div class="col s12">
                    <p>This site has been made using master race Visual Studio 2017. Because there is no other tools for making awesome websites.</p>
                    <p>I'm sorry that footer is not fixed. My skills are not enough for that.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="sass">
    #home-banner {
        background-image: url("https://i.ytimg.com/vi/IwxkVL5DGg8/maxresdefault.jpg");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        background-color: #0078D7;
        height: 200px;
        margin-bottom:3em;
    }
    #home-container {

    .home-header{
        font-size: 2em;
        margin-top: 1em;
        margin-bottom: 1em;
    }

    .column-header {
        font-weight: 700;
        font-size: 1em;
    }

    .column-text {
        vertical-align: central;
    }
    }
    
</style>