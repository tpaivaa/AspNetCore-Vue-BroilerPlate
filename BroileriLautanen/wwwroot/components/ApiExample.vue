<script>
  import ExampleService from '../services/ExampleAPI/exampleservice';
  export default {
    data: function () {
      return {
        result: ""
      }
    },
    mounted: function () {
        ExampleService.getExample(this).then(resp => {
            // Success
            console.log(resp.status);
            console.log(resp.statusText);
            this.result = resp.data;
        }, function (response) {
            // Error
            console.log(response.statusText);
      });
    }
  }
</script>

<template>
    <div>
        <div>
            <div>
                <h2>Result from ASP.NET Core Api</h2>
                <p>
                    {{result}}
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="sass">
    /* Imports */
    @import "../stylesheets/variables.scss";
    /* Styles */
</style>