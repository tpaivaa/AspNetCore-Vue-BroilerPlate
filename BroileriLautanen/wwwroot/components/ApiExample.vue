<script>
  import ExampleService from '../services/ExampleAPI/exampleservice';
  export default {
    data: function () {
      return {
          result: "",
          postResult: ""
      }
    },
    mounted: function () {
        ExampleService.getExample(this).then(resp => {
            // Success
            console.log("GET");
            console.log(resp.status);
            console.log(resp.statusText);
            this.result = resp.data;
        }, function (response) {
            // Error
            console.log(response.statusText);
            });
        ExampleService.postExample(this).then(resp => {
            // Success
            console.log("POST");
            console.log(resp.status);
            console.log(resp.statusText);
            this.postResult = resp.statusText;
        }, function (response) {
            // Error
            console.log(response.statusText);
        });
    }
  }
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col s6">
                <h2>HTTP GET Result:</h2>
                <p>
                    {{result}}
                </p>
            </div>
            <div class="col s6">
                <h2>HTTP POST Result:</h2>
                <p>
                    {{postResult}}
                </p>
            </div>
            <div class="col s12 explanation-text">
                <p>You can see what is happening with HTTP GET / POST from console. Haha. </p>
            </div>
        </div>
    </div>
</template>

<style lang="sass">
    /* Imports */
    @import "../stylesheets/variables.scss";
    /* Styles */
    .explanation-text{
        color:$black;
        font-size:2em;
    }
</style>