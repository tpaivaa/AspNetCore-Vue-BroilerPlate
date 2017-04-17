<template>
    <div class="container">
        <div class="about-header light-blue-text text-darken-3">
            <h1>About</h1>
        </div>
        <div class="row">
            <div class="col s12 purpose-box">
                <p>Purpose of this website is to serve Santeri. Serve as a boilerplate so he can quickly start developing useless ideas.</p>
            </div>
            <div class="col s5 minor-purpose-box">
                <p>Also the idea was to get some experience with javascript tools like gulp, NPM, Bower.</p>
            </div>
            <div class="col s5 minor-purpose-box">
                <p> Besides that ASP.NET Core is something quite new also. This page provides playground with API abilities and Models.</p>
            </div>
            <div class="col s12 purpose-box">
                <p>Purpose of this website is to serve Santeri. Serve as a boilerplate so he can quickly start developing useless ideas.</p>
            </div>
            <div class="col s5 minor-purpose-box">
                <p>Also the idea was to get some experience with javascript tools like gulp, NPM, Bower.</p>
            </div>
            <div class="col s5 minor-purpose-box">
                <p> Besides that ASP.NET Core is something quite new also. This page provides playground with API abilities and Models.</p>
            </div>
            <div class="col s12 purpose-box">
                <p>Every normal user likes to see boxes of different size next to each other.</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
    }
</script>
<style lang="sass" scoped>
    @import "../stylesheets/variables.scss";
    .purpose-box{
        font-size:1.2em;
        font-weight:700;
        margin-top:0.5em;
        margin-bottom:0.5em;
    }
    .minor-purpose-box{
        background-color:$blue;
        color:$white;
        padding:1em;
        margin:1em;
        border-radius:3px;
        border: 1px solid $black;
    }
</style>