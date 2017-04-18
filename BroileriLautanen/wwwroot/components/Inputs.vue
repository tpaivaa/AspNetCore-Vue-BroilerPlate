<template>
    <div class="container">
        <h2>{{title}}</h2>
        <div class="row">
            <div class="col s3">
                <div class="section-header">
                    Lists
                </div>
                <div class="section-content">
                    <ul>
                        <li v-for="item in exampleList">
                            <p>Name: {{item.Name}}</p>
                            <p>Age: {{item.Age}}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col s3">
                <div class="section-header">
                    Text Input
                </div>
                <div class="section-content">
                    <div class="text-input-result">
                        {{userMessage}}
                    </div>
                    <input v-model="userMessage" />
                </div>
            </div>
            <div class="col s3">
                <div class="section-header">
                    Button counter {{counter}}
                </div>
                <div class="section-content">
                    <a v-on:click="CounterAdd" class="btn-floating btn-large waves-effect waves-light green">
                        <i class="small material-icons">add</i>
                    </a>
                    <a v-on:click="CounterSubstract" class="btn-floating btn-large waves-effect waves-light red">
                        <i class="small material-icons">remove</i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
        name: "Inputs",
        data: function () {
            var exampleList = [{ "Name": "Santeri", "Age": 25 },
            { "Name": "Neo", "Age": 5 },
            { "Name": "Jocke", "Age": 24 },
            ];
            return {
                counter:0,
                title: "Functionality Examples",
                exampleList: exampleList,
                userMessage: "Change me!"
            }
        },
        methods: {
            CounterAdd: function () {
                this.counter++;
            },
            CounterSubstract: function () {
                this.counter--;
            }
        }
    }
</script>
<style lang="sass" scoped>
    /* Imports */
    @import "../stylesheets/variables.scss";
    /* Styles */
    .section-header{
        font-size:1.5em;
        font-weight:700;
        margin-bottom:1em;
    }
    .section-content{
        .text-input-result{
                              margin-bottom:1em;
                          }
                          a{
                              margin:1em;
                          }
    }
</style>