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
            console.log(resp);
            this.result = resp.data;
      }, function (response) {
        console.log(response)
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